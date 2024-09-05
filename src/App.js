import Home from "./Pages/Home";
import "./App.css";
import "../src/Reset/Reset.css";
import Data from "./Componentes/Data/Data";

function App() {
  const products =
    Data.find((e) => e.showcaseProductsAndBanner)?.showcaseProductsAndBanner ||
    [];
  return (
    <div>
      <Home products={products} />
    </div>
  );
}

export default App;
