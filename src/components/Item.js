import React from "react";

const Item = ({ product }) => {
  //<div>{product.name}</div>
  return (
    <>
      <div className="py-10">
        <div className="rounded overflow-hidden border-black">
          <img src={product.picture_url} alt=""></img>
        </div>
      </div>
    </>
  );
};

export default Item;
