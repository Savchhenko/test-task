import starIcon from "../assets/star-icon.svg";
import "../index.css";

const Card = ({props}) => {

    return (
        <div className="card">
            <img src={props.img} className="card__img" alt="Наушники"/>
            <div className="card__info">
                <h4>{props.title}</h4>
                <div className="card__info-price">
                    <span className="price">{props.price} Р</span>
                    {
                        props.oldPrice ? <span className="old-price">{props.oldPrice} Р</span> : null
                    }
                </div>
            </div>
            <div className="card__info">
                <div className="card__info-rate">
                    <img src={starIcon}/>
                    <span>{props.rate}</span>
                </div>
                <button className="card__btn">Купить</button>
            </div>
        </div>
    );
};

export default Card;