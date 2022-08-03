import { CartContext } from "./CartContext";
import { useContext } from "react";

const Cart = () => {
  const cartContext = useContext(CartContext);
  console.log(cartContext.cartList);

  function deleteItem(id) {
    cartContext.removeItem(id);
  }

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
      {cartContext.cartList.length > 0 &&
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
              <div className="py-6 px-6">
                <div className="font-bold text-xl mb-2">{item.name}</div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
            <div className="py-6">
              <div className="text-gray-600">
                items {cartContext.productAmount}
              </div>
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
        ))}
    </>
  );
};

export default Cart;
