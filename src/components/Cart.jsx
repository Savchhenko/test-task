import "../index.css";
import CartItem from "./CartItem";

const Cart = () => {
    const items = [];
    const data = sessionStorage.getItem("products").split("},");
    for (let i = 0; i < data.length - 1; i++) {
        data[i] += "}";
    };
    for (let i = 0; i < data.length; i++) {
        items.push(JSON.parse(data[i]));
    }

    return (
        <section className="padding-bottom">
            <h3 className="section-title">Корзина</h3>
            <div className="cart">
                <div className="cart__items">
                    {
                        items.map(item => <CartItem item={item} key={item.key}/>)
                    }
                </div>
                <div className="cart__item cart__forpayment">
                    <div className="forpayment">
                        <span><b>ИТОГО</b></span>
                        <span><b>₽ 2 927</b></span>
                    </div>
                    <button className="cart__forpayment__btn">Перейти к оформлению</button>
                </div>
            </div>
        </section>
    );
};

export default Cart;