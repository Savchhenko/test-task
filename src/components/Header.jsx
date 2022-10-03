import cartIcon from "../assets/cart-icon.svg";
import likesIcon from "../assets/likes-icon.svg";
import "../index.css";

const Header = () => {
  return (
    <header className="header">
        <div className="logo">QPICK</div>
        <div className="header__icons">
            <a href="#" className="icon">
                <span className="icon-notification">2</span>
                <img src={likesIcon} alt="likes icon" />
            </a>
            <a href="#" className="icon">
                <span className="icon-notification">1</span>
                <img src={cartIcon} alt="cart icon"/>
            </a>
        </div>
    </header>
  );
};

export default Header;