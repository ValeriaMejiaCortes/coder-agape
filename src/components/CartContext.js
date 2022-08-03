import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [productAmount, setProductAmount] = useState(0);

  const addToCart = (item, amount) => {
    setProductAmount(amount);
    if (!isInCart(item.id)) {
      let item01 = { ...item };
      item01.price = item.price * amount;
      setCartList([...cartList, item01]);
    } else {
      alert("ESTE ARTICULO YA ESTA AGREGADO EN EL CARRITO");
    }
  };

  const removeItem = (itemId) => {
    const newArr = cartList.filter((object) => {
      return object.id !== itemId;
    });
    setCartList(newArr);
  };

  const clear = () => {
    setCartList([]);
  };

  function isInCart(id) {
    return cartList.some((elem) => elem.id === id);
  }

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        removeItem,
        clear,
        productAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
