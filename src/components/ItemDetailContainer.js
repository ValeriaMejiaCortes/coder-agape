import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data";
import ItemDetail from "./ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";
import { useNavigate } from "react-router-dom";

const ItemDetailContainer = (props) => {
  const [item, setItem] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    async function getMyDoc() {
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setItem({
          id: docSnap.id,
          ...docSnap.data(),
        });
      } else {
        navigate(`/`, { replace: true });
      }
    }
    getMyDoc();
  }, [id, navigate]);

  return (
    <>
      <h1>{props.saludo}</h1>
      <ItemDetail item={item} />
    </>
  );
};

export default ItemDetailContainer;
