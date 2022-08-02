import React, { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  const [itemCount, setItemCount] = useState(0);
  const test = useContext(CartContext);

  const onAdd = (quantity) => {
    alert("You have selected " + quantity + " items");
    setItemCount(quantity);
    test.addToCart(item);
  };
  /**

       */
  return (
    <div className="grid grid-cols-2 lg:gap-1 justify-items-center text-left px-32 py-10 grid grid-flow-col gap-5 pb-2 px-6 justify-content-center">
      <div
        className="pb-5 shadow-2xl border border-navbarDark
      rounded min-w-full hover:scale-105 cursor-pointer"
      >
        <div className="rounded overflow-hidden shadow-lg max-w-sm w-full min-w-full">
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
          <p className="text-gray-600 pt-4">${item.price}</p>
        </div>
        <div className="grid grid-flow-col gap-5 pb-2 px-6 justify-content-center">
          <ItemCount stock={3} initial={1} onAdd={onAdd} />
        </div>
        <div className="grid grid-flow-col gap-5 pb-2 px-6 justify-content-center">
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
