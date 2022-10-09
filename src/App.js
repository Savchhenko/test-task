import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Products1 from "./components/Products1";
import Products2 from "./components/Products2";
import Footer from "./components/Footer";
import Context from "./Context";

function App() {
    const [productsCounter, setProductsCounter] = useState(0); //the number on CartIcon in Header component
    const count = () => setProductsCounter(productsCounter + 1);

    // global object that contains variable and function count() which changes this variable
    const value = {
        productsCounter,
        count,
    };

    return (
        <Context.Provider value={value}>
            <div className="App">
                <Header counter={productsCounter} />
                <Products1 />
                <Products2 />
                <Footer />
            </div>
        </Context.Provider>
    );
}

export default App;
