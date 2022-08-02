import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = (props) => {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  function myPromise() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(data.find((item) => item.id === Number(id)));
      }, 2000);
    }).then((reselvedItem) => setItem(reselvedItem));
  }

  useEffect(() => {
    myPromise();
  }, []);

  return (
    <>
      <h1>{props.saludo}</h1>
      <ItemDetail item={item} />
    </>
  );
};

export default ItemDetailContainer;
