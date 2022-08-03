import React, { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  const [itemCount, setItemCount] = useState(0);
  const cartContext = useContext(CartContext);

  const onAdd = (quantity) => {
    alert("You have selected " + quantity + " items");
    setItemCount(quantity);
    cartContext.addToCart(item, quantity);
  };
  /**

       */
  return (
    <div className="grid grid-cols-2 grid-flow-col gap-4 pb-2 lg:gap-1 justify-items-end py-10 px-20">
      <div
        className="shadow-2xl border border-navbarDark
      rounded hover:scale-105 cursor-pointer text-left mr-10"
      >
        <div className="rounded overflow-hidden shadow-lg max-w-sm w-full min-w-full h-96">
          <img
            src={item.picture_url}
            alt={item.name}
            className="w-full h-full max-h-full max-w-full object-cover"
          ></img>
        </div>
      </div>
      <div className="pr-60">
        <div className="py-6 text-left">
          <div className="font-bold text-xl mb-2">{item.name}</div>
          <p className="text-gray-600">{item.description}</p>
          <p className="text-gray-600 pt-4">${item.price}</p>
        </div>
        <div className="grid grid-flow-col gap-5 pb-2 justify-content-center">
          <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
        </div>
        <div className="grid grid-flow-col gap-5 pb-2 pt-4 justify-content-center">
          <Link
            to="/cart"
            className="no-underline bg-gray-900 text-white px-3 py-2 rounded-md font-medium"
            aria-current="page"
          >
            Go to cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
