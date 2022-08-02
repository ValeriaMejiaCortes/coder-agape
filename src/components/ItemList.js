import React from "react";
import Item from "./Item";

const ItemList = ({ items }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 sm:gap-4 md:gap-6 justify-items-center text-left px-32 py-10">
    {items.map((item) => (
      <Item product={item} key={item.id} />
    ))}
  </div>
);

export default ItemList;
