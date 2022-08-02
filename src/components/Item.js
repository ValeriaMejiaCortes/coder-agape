import React, { useCallback } from "react";
import ItemCount from "./ItemCount";
import { useNavigate } from "react-router-dom";

const Item = ({ product }) => {
  const navigate = useNavigate();

  function GoDetails(id) {
    if (id !== undefined) {
      navigate(`/product/${id}`, { replace: true });
    }
  }

  return (
    <>
      <div
        className="pb-5 shadow-2xl border border-navbarDark
      rounded min-w-full hover:scale-105 cursor-pointer"
        onClick={() => GoDetails(product.id)}
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
      </div>
    </>
  );
};

export default Item;
