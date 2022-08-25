import React, { useEffect, useState } from "react";
import ItemList from "../components/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../utils/firebaseConfig";
import { getDocs, collection } from "firebase/firestore";

const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const firestoreFetch = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const dataFromFS = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return dataFromFS;
    };
    firestoreFetch()
      .then((result) => {
        if (id === undefined) {
          setItems(result);
        } else {
          setItems(
            result.filter((product) => product.category_id === Number(id))
          );
        }
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <ItemList items={items} />
    </>
  );
};

export default ItemListContainer;
