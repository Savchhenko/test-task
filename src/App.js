import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import Context from "./Context";
import parseDataFromSessionStorage from "./parseDataFromSessionStorage";

function App() {
    const productsCounterNumber = parseDataFromSessionStorage().length; // number of objects that SessionStorage stores
    const [productsCounter, setProductsCounter] = useState(productsCounterNumber); //the number on CartIcon in Header component
    const count = () => setProductsCounter(productsCounter + 1);

    // global object that contains variable and function count() which changes this variable
    const value = {
        productsCounter,
        count,
    };

    return (
        <>
            <Context.Provider value={value}>
                <div className="App">
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Layout counter={productsCounter} />}>
                                <Route index element={<HomePage />} />
                                <Route path="cart" element={<CartPage />} />
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </div>
            </Context.Provider>
        </>
    );
}

export default App;
