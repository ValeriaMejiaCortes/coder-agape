import React from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  function goDetails(id) {
    if (id !== undefined) {
      <Link to={`/product/${id}`}></Link>;
    }
  }

  return (
    <>
      <div
        className="pb-5 shadow-2xl border border-navbarDark
      rounded min-w-full hover:scale-105 cursor-pointer"
        onClick={() => goDetails(product.id)}
      >
        <div className="rounded overflow-hidden shadow-lg max-w-sm w-full min-w-full">
          <img
            src={product.picture_url}
            alt={product.name}
            className="w-full h-[250px] object-cover"
          ></img>
        </div>
        <div className="py-4 px-6">
          <div className="font-bold text-xl mb-2">{product.name}</div>
          <p className="text-gray-600">${product.price}</p>
        </div>
        <div className="grid grid-flow-col gap-5 pb-2 px-6 justify-content-center">
          <ItemCount stock={3} initial={1} />
        </div>
      </div>
    </>
  );
};

export default Item;
