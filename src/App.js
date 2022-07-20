import "./App.css";
import NavBar from "./components/NavBar";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer saludo="Hola mundo ItemListContainer" />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
