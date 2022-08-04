import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (item, amount) => {
    item.amount = amount;
    if (!isInCart(item.id)) {
      setTotalAmount(totalAmount + amount);
      let item01 = { ...item };
      item01.price = item.price * amount;
      setTotalPrice(totalPrice + item01.price);
      setCartList([...cartList, item01]);
    } else {
      alert("ESTE ARTICULO YA ESTA AGREGADO EN EL CARRITO");
    }
  };

  const removeItem = (itemId) => {
    let tempCart = cartList.filter((obj) => obj.id === itemId);
    setTotalAmount(totalAmount - tempCart[0].amount);
    setTotalPrice(totalPrice - tempCart[0].price);
    const newArr = cartList.filter((object) => {
      return object.id !== itemId;
    });
    setCartList(newArr);
  };

  const clear = () => {
    setTotalPrice(0);
    setTotalAmount(0);
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
        totalAmount,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
