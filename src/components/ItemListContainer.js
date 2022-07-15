import React, { useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);

  function myPromise() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res([
          {
            id: 1,
            name: "product01",
            price: 200,
            picture_url: "",
          },
          {
            id: 2,
            name: "product02",
            price: 400,
            picture_url: "",
          },
        ]);
      }, 2000);
    }).then((reselvedItems) => setItems(reselvedItems));
  }

  myPromise();

  return (
    <>
      <h1>{props.saludo}</h1>
      <ItemCount stock={3} initial={1} />
      <ItemList items={items} />
    </>
  );
};

export default ItemListContainer;
