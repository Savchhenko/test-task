import starIcon from "../assets/star-icon.svg";
import "../index.css";
import { useContext } from "react";
import Context from "../Context";

const Card = (props) => {
    const { item } = props;
    const value = useContext(Context);

    // by click on Product's card change the number on CartIcon on Header component
    const handleClick = () => { 
        value.count();
    }; 


    return (
        <div className="card">
            <img src={item.img} className="card__img" alt="Наушники"/>
            <div className="card__info">
                <h4>{item.title}</h4>
                <div className="card__info-price">
                    <span className="price">{item.price} Р</span>
                    {
                        item.oldPrice ? <span className="old-price">{item.oldPrice} Р</span> : null
                    }
                </div>
            </div>
            <div className="card__info">
                <div className="card__info-rate">
                    <img src={starIcon}/>
                    <span>{props.rate}</span>
                </div>
                <button className="card__btn hover" onClick={handleClick}>Купить</button>
            </div>
        </div>
    );
};

export default Card;