import React, { useContext } from "react";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const cartContext = useContext(CartContext);

  return (
    <>
      <Link to="/cart" className="mt-1">
        <li className="font-sans block mr-1 lg:inline-block lg:mt-0 lg:ml-10 align-middle text-black hover:text-gray-700">
          <BsCart2 style={{ fill: "#FEDF7F" }} size={25} className="inline" />
          {cartContext.cartList.length > 0 ? (
            <span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
              {cartContext.totalAmount}
            </span>
          ) : (
            <div></div>
          )}
        </li>
      </Link>
    </>
  );
};

export default CartWidget;
