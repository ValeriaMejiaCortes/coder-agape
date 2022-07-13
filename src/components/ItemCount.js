import React, { useState } from 'react'


const ItemCount = ({initial, stock}) => {
  
  const [products, setProducts]= useState(initial);

  function addProduct(){
    if(products < stock){
      setProducts( current => current+1 );
    }else{
      alert("No hay más existencia");
    }
  };

  function deleteProduct(){
    if(products > 0){
      setProducts( current => current-1 );
    }else{
      alert("Ya no tienes productos agregados");
    }
  };

  return (
    <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
        <button type="button" className="btn btn-primary" onClick={deleteProduct}>-</button>
        <button type="button" className="btn btn-primary">{products}</button>
        <button type="button" className="btn btn-primary" onClick={addProduct}>+</button>
    </div>
  )
}

export default ItemCount