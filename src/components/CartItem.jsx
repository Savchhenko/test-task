import "../index.css";
import { useState } from "react";

const CartItem = (props) => {
    const { item } = props;
    
    const [counterNumber, setCounterNumber] = useState(1);
    const [productsCost, setProductsCost] = useState(item.price);

    const minusHandler = () => {
        if (counterNumber > 1) {
            setCounterNumber(counterNumber - 1);
            setProductsCost(productsCost - item.price);
        } 
    };
    const plusHandler = () => {
        setCounterNumber(counterNumber + 1);
        setProductsCost(productsCost + item.price);
    };

    return (
        <div className="cart__item cart__product">
            <div className="cart__product-img">
                <img src={item.img} />
                <div className="counter">
                    <button onClick={minusHandler} className="counter-btn"><span className="circle minus"></span></button>
                    <span>{counterNumber}</span>
                    <button onClick={plusHandler} className="counter-btn"><span className="circle plus"></span></button>
                </div>
            </div>
            <div className="cart__product-info">
                <div>
                    <h4>{item.title}</h4>
                    <span>{item.price} P</span>
                </div>
            </div>
            <div className="cart__product-entirecost">
                <img src="./images/delete-icon.svg" />
                <span><b>{productsCost} P</b></span>
            </div>
        </div>
    );
};

export default CartItem;