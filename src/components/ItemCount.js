import React, { useState, useContext } from "react";
import { AlertContext } from "../context/AlertContext";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [amount, setProducts] = useState(initial);
  const alertContext = useContext(AlertContext);

  function addProduct() {
    if (amount < stock) {
      setProducts((current) => current + 1);
    }
  }

  function deleteProduct() {
    if (amount > 0) {
      setProducts((current) => current - 1);
    } else {
      alertContext.setAlert({
        description: "Ya no tienes productos seleccionados",
      });
    }
  }

  return (
    <>
      <div
        className="w-full justify-content-center text-white border border-white 
      hover:text-navbarDark hover:bg-white font-normal rounded-lg text-xs font-bold 
      border-2 p-2.5 text-center inline-flex items-center bg-navbarDark hover:font-bold hover:border-navbarDark"
        role="group"
        aria-label="Button group with nested dropdown"
      >
        <button type="button" onClick={deleteProduct}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="sr-only">Icon description</span>
        </button>
        <button
          type="button"
          className="px-1 w-full justify-items-center text-lg"
        >
          {amount}
        </button>
        <button type="button" onClick={addProduct}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="sr-only">Icon description</span>
        </button>
      </div>
      {amount && stock ? (
        <button
          className="w-full justify-center text-white border border-white 
      hover:text-navbarDark hover:bg-white font-medium rounded-lg text-sm 
      border-2 p-2.5 text-center inline-flex items-center bg-navbarDark hover:font-bold hover:border-navbarDark"
          role="group"
          aria-label="Button group with nested dropdown"
          onClick={() => onAdd(amount)}
        >
          Agregar al carrito
        </button>
      ) : (
        <button
          disabled
          className="border-2 p-2.5 rounded-lg border-navbarDark"
        >
          Agregar al carrito
        </button>
      )}
    </>
  );
};

export default ItemCount;
