import { CartContext } from "./CartContext";
import { useContext } from "react";
import {
  collection,
  doc,
  increment,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../utils/firebaseConfig";

const Cart = () => {
  const cartContext = useContext(CartContext);

  function deleteItem(id) {
    cartContext.removeItem(id);
  }

  const createOrder = () => {
    let itemForBD = cartContext.cartList.map((item) => ({
      id: item.id,
      title: item.name,
      price: item.price,
      qty: item.amount,
    }));
    let order = {
      buyer: {
        email: "valeria@gmail.com",
        name: "Valeria Mejía",
        phone: "3126156755",
      },
      date: serverTimestamp(),
      items: itemForBD,
      total: cartContext.totalPrice,
    };

    const createOrderInFirestore = async () => {
      const newOrderRef = doc(collection(db, "orders"));
      await setDoc(newOrderRef, order);
      return newOrderRef;
    };

    createOrderInFirestore()
      .then((res) => alert("Se creo exitosamente tu orden el ID es: " + res.id))
      .catch((error) => console.log(error));

    cartContext.cartList.forEach(async (item) => {
      const itemRef = doc(db, "products", item.id);
      await updateDoc(itemRef, {
        stock: increment(-item.amount),
      });
    });

    setTimeout(() => {
      cartContext.clear();
    }, 2000);
  };

  return (
    <>
      <button
        className="w-auto justify-content-center text-white border border-white 
                  hover:text-navbarDark hover:bg-white font-normal rounded-lg text-md
                  font-bold border-2 p-2.5 mt-4 text-center inline-flex items-center 
                  bg-navbarDark hover:font-bold hover:border-navbarDark my-10 mt-[35px]"
        onClick={() => cartContext.clear()}
      >
        Eliminar todos los productos
      </button>
      {cartContext.cartList.length > 0 ? (
        <div className="grid place-items-center mb-10">
          <div className=" justify-center max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Resumen</div>
              <div className="grid grid-cols-1 gap-4">
                <div className="grid grid-cols-4 gap-4">
                  <p className="col-start-1 col-end-3 text-gray-700 text-base">
                    total items
                  </p>
                  <p className="col-end-7 col-span-2 text-gray-700 text-base">
                    {cartContext.totalAmount}
                  </p>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <p className="col-start-1 col-end-3 text-gray-700 text-base">
                    subtotal
                  </p>
                  <p className="col-end-7 col-span-2 text-gray-700 text-base">
                    ${cartContext.totalPrice}
                  </p>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <p className="col-start-1 col-end-3 text-gray-700 text-base">
                    total
                  </p>
                  <p className="col-end-7 col-span-2 text-gray-700 text-base">
                    ${cartContext.totalPrice}
                  </p>
                </div>
              </div>
            </div>
            <div className="px-6">
              <button
                className="w-auto justify-content-center text-white border border-white 
                  hover:text-navbarDark hover:bg-white font-normal rounded-lg text-md
                  font-bold border-2 p-2.5 mt-4 text-center inline-flex items-center 
                  bg-navbarDark hover:font-bold hover:border-navbarDark my-8"
                onClick={createOrder}
              >
                Comprar
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
      {cartContext.cartList.length > 0 ? (
        cartContext.cartList.map((item) => (
          <div className="grid grid-cols-4 border lg:gap-1 justify-items-center text-left pl-32 pr-32 py-4 grid grid-flow-col gap-5 mb-2 px-6">
            <div
              className="shadow-2xl border border-navbarDark
            rounded min-w-full cursor-pointer h-full"
            >
              <div className="rounded overflow-hidden shadow-lg max-w-sm w-full min-w-full h-96">
                <img
                  src={item.picture_url}
                  alt={item.name}
                  className="w-full h-full max-h-full max-w-full object-cover"
                ></img>
              </div>
            </div>
            <div>
              <div className="py-5 px-5">
                <div className="font-bold text-xl mb-2">{item.name}</div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
            <div className="py-5">
              <div className="text-gray-600">items {item.amount}</div>
              <p className="font-bold text-xl mb-2">Price ${item.price}</p>
              <button
                className="w-full justify-content-center text-white border border-white 
                  hover:text-navbarDark hover:bg-white font-normal rounded-lg text-md
                  font-bold border-2 p-2.5 mt-4 text-center inline-flex items-center 
                  bg-navbarDark hover:font-bold hover:border-navbarDark"
                onClick={() => deleteItem(item.id)}
              >
                remove
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="mt-10 font-bold">
          <h1>El carrito esta vacio</h1>
          <button
            className="w-auto justify-content-center text-white border border-white 
                  hover:text-navbarDark hover:bg-white font-normal rounded-lg text-md
                  font-bold border-2 p-2.5 mt-4 text-center inline-flex items-center 
                  bg-navbarDark hover:font-bold hover:border-navbarDark my-10 mt-[35px]"
            onClick={() => cartContext.clear()}
          >
            Seguir comprando
          </button>
        </div>
      )}
    </>
  );
};

export default Cart;
