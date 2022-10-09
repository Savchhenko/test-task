import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Products1 from "./components/Products1";
import Products2 from "./components/Products2";
import Footer from "./components/Footer";

function App() {
  const [productsCounter, setProductsCounter] = useState(0);
  const count = () => setProductsCounter(productsCounter + 1);

  return (
    <div className="App">
      <Header counter={productsCounter} />
      <Products1 count={count} />
      <Products2 count={count} />
      <Footer />
    </div>
  );
}

export default App;
