import "./index.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa"; // Import icons from react-icons

export function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Serviços</h3>
          <ul>
            <li>Fretamento</li>
            <li>Locação</li>
            <li>Cargas</li>
            <li>Encomendas</li>
            <li>Translado</li>
            <li>City Tur</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contato</h3>
          <ul>
            <li>cooperbrag@gmail.com</li>
          </ul>
        </div>

        <div className="footer-section address-section">
          <h3>Endereço</h3>
          <p>
            Logradouro: Avenida Mendonça Furtado, 510 <br />
            Município/UF: Bragança, PA <br />
            CEP: 68.600-000 <br />
            Brasil
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
        </div>
        <p className="copyright">Copyright © 2025 Cooperbrag</p>
      </div>
    </footer>
  );
}