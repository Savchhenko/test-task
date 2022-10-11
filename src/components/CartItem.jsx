import "../index.css";

const CartItem = (props) => {
    const { item } = props;
    return (
        <div className="cart__item cart__product">
            <div className="cart__product-img">
                <img src={item.img} />
                <div className="counter">
                    <button className="counter-btn"><span className="circle minus"></span></button>
                    <span>1</span>
                    <button className="counter-btn"><span className="circle plus"></span></button>
                </div>
            </div>
            <div className="cart__product-info">
                <div>
                    <h4>{item.title}</h4>
                    <span>{item.price}</span>
                </div>
            </div>
            <div className="cart__product-entirecost">
                <img src="./images/delete-icon.svg" />
                <span><b>2 927 ₽</b></span>
            </div>
        </div>
    );
};

export default CartItem;