import starIcon from "../assets/star-icon.svg";
import "../index.css";

const Card = (props) => {
    const {item, count} = props;

    const handleClick = () => { count() };

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