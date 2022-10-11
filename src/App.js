import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
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
