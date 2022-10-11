import "../index.css";
import { useState } from "react";
import CartItem from "./CartItem";
import parseDataFromSessionStorage from "../parseDataFromSessionStorage";

const Cart = () => {
    const items = parseDataFromSessionStorage(); 

    const [entireCost, setEntireCost] = useState(0);

    const updateEntireCost = (num) => {
        setEntireCost(entireCost + num);
    };

    return (
        <section className="padding-bottom">
            <h3 className="section-title">Корзина</h3>
            <div className="cart">
                <div className="cart__items">
                    {
                        items.map(item => 
                            <CartItem 
                                item={item} 
                                key={item.key} 
                                updateEntireCost={updateEntireCost}/>
                        )
                    }
                </div>
                <div className="cart__item cart__forpayment">
                    <div className="forpayment">
                        <span><b>ИТОГО</b></span>
                        <span><b>₽ {entireCost}</b></span>
                    </div>
                    <button className="cart__forpayment__btn">Перейти к оформлению</button>
                </div>
            </div>
        </section>
    );
};

export default Cart;