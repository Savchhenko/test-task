import "../index.css";
import langIcon from "../assets/lang-icon.svg";
import vkIcon from "../assets/vk-icon.svg";
import telegramIcon from "../assets/telegram-icon.svg";
import whatsappIcon from "../assets/whatsapp-icon.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo">QPICK</div>
      <nav className="footer__nav-links">
        <a href="#">Избранное</a>
        <a href="#">Корзина</a>
        <a href="#">Контакты</a>
      </nav>
      <div className="footer__links">
        <a href="#">Условия сервиса</a>
        <div id="lang">
          <img src={langIcon} alt="Иконка глобуса"/>
          <span id="lang-active">Рус</span>
          <span>Eng</span>
        </div>
      </div>
      <div className="footer__social">
        <a href="#" alt="VK"><img src={vkIcon} /></a>
        <a href="#" alt="Telegram"><img src={telegramIcon} /></a>
        <a href="#" alt="WhatsApp"><img src={whatsappIcon} /></a>
      </div>
    </footer>
  );
};

export default Footer;