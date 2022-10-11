import "../index.css";
import { useState, useEffect } from "react";

const CartItem = (props) => {    
    const [counterNumber, setCounterNumber] = useState(1);
    const [productsCost, setProductsCost] = useState(props.item.price);
    // props.updateEntireCost(productsCost);
    useEffect(() => {props.updateEntireCost(productsCost)}, [])

    const minusHandler = () => {
        if (counterNumber > 1) {
            setCounterNumber(counterNumber - 1);
            setProductsCost(productsCost - props.item.price);
            props.updateEntireCost(-props.item.price);
        } 
    };
    const plusHandler = () => {
        setCounterNumber(counterNumber + 1);
        setProductsCost(productsCost + props.item.price);
        props.updateEntireCost(props.item.price);
    };


    return (
        <div className="cart__item cart__product">
            <div className="cart__product-img">
                <img src={props.item.img} alt="Наушники"/>
                <div className="counter">
                    <button onClick={minusHandler} className="counter-btn"><span className="circle minus"></span></button>
                    <span>{counterNumber}</span>
                    <button onClick={plusHandler} className="counter-btn"><span className="circle plus"></span></button>
                </div>
            </div>
            <div className="cart__product-info">
                <div>
                    <h4>{props.item.title}</h4>
                    <span>{props.item.price} P</span>
                </div>
            </div>
            <div className="cart__product-entirecost">
                <img src="./images/delete-icon.svg" alt="Иконка удалить товар"/>
                <span><b>{productsCost} P</b></span>
            </div>
        </div>
    );
};

export default CartItem;