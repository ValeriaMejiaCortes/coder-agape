import React from "react";
import Item from "./Item";

const ItemList = ({ items }) => (
  <div className="grid grid-cols-4 lg:gap-6 justify-items-center text-left px-32 py-10">
    {items.map((item) => (
      <Item product={item} key={item.id} />
    ))}
  </div>
);

export default ItemList;
