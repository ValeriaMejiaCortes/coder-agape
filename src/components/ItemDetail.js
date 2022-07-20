import React from "react";

const ItemDetail = ({ item }) => {
  return (
    <>
      <h4>Id del producto - {item.id}</h4>
      <h4>Nombre del producto - {item.name}</h4>
      <h4>Url imagen del producto - {item.picture_url}</h4>
      <h4>Precio del producto - {item.price}</h4>
    </>
  );
};

export default ItemDetail;
