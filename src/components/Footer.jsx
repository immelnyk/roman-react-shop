import "./Footer.css";
import { logoImg } from "../assets";

const Footer = () => {
  return (
    <footer className="footer container">
      <div className="footer-content">
        <img className="footer-logo" src={logoImg} alt="logo" />
        <span>© Komora. All rights reserved 2024</span>
      </div>
    </footer>
  );
};

export default Footer;
