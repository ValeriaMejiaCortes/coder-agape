import { CartContext } from "./CartContext";
import { useContext } from "react";

const Cart = () => {
  const test = useContext(CartContext);
  console.log(test.cartList);
  return (
    <>
      {test.cartList.length > 0 &&
        test.cartList.map((item) => (
          <div className="grid grid-cols-3 border pb-8 lg:gap-1 justify-items-center text-left px-32 py-8 grid grid-flow-col gap-5 pb-2 px-6">
            <div
              className="shadow-2xl border border-navbarDark
            rounded min-w-full cursor-pointer h-full"
            >
              <div className="rounded overflow-hidden shadow-lg w-full h-full min-w-full object cover">
                <img
                  src={item.picture_url}
                  alt={item.name}
                  className="w-full h-full object-cover"
                ></img>
              </div>
            </div>
            <div>
              <div className="py-6 px-6">
                <div className="font-bold text-xl mb-2">{item.name}</div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
            <div className="py-10 pr-[50%]">
              <p className="text-gray-600">Price ${item.price}</p>
            </div>
          </div>
        ))}
    </>
  );
};

export default Cart;
