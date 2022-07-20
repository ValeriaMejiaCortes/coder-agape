import React, { useState } from "react";
import data from "../data";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = (props) => {
  const [item, setItem] = useState([]);

  function myPromise() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(data[1]);
      }, 2000);
    }).then((reselvedItem) => setItem(reselvedItem));
  }

  myPromise();

  return (
    <>
      <h1>{props.saludo}</h1>
      <ItemDetail item={item} />
    </>
  );
};

export default ItemDetailContainer;
