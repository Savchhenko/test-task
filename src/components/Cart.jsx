import "../index.css";

const Cart = () => {
  return (
    <section>
        <h3 className="section-title">Корзина</h3>
        <div className="cart">
            <div className="cart__item cart__product">
                <div className="cart__product-img">
                    <img src="./images/product1.png"/>
                    <div className="counter">
                        <button className="counter-btn"><span className="circle minus"></span></button>
                        <span>1</span>
                        <button className="counter-btn"><span className="circle plus"></span></button>
                    </div>
                </div>
                <div className="cart__product-info">
                    <div>
                        <h4>Apple BYZ S852I</h4>
                        <span>2 927 ₽</span>
                    </div>
                </div>
                <div className="cart__product-entirecost">
                    <img src="./images/delete-icon.svg" />
                    <span><b>2 927 ₽</b></span>
                </div>
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