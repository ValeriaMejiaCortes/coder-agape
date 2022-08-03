import React, { useEffect, useState } from "react";
import data from "../data";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setTimeout(() => {
      if (id === undefined) {
        setItems(data);
      } else {
        setItems(data.filter((product) => product.category_id === Number(id)));
      }
    }, 1000);
  }, [id]);

  return (
    <>
      <ItemList items={items} />
    </>
  );
};

export default ItemListContainer;
