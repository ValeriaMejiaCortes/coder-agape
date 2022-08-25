import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import CartContextProvider from "./context/CartContext";
import AlertContextProvider from "./context/AlertContext";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <AlertContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route
                path="/"
                element={<ItemListContainer saludo="Nuestros servicios" />}
              />
              <Route path="/category/:id" element={<ItemListContainer />} />
              <Route path="/product/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </AlertContextProvider>
    </div>
  );
}

export default App;
