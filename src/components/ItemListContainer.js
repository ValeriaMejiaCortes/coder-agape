import React from 'react'
import ItemCount from './ItemCount';

const ItemListContainer = (props) => {
  return (
    <>
      <h1>{props.saludo}</h1>
      <ItemCount stock={3} initial={1}/>
    </>
  )
}

export default ItemListContainer;