import "./index.css";
import logo from "../../assets/logo.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// WhatsApp Icon SVG (you can replace this with an image or icon library)
const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="currentColor"
    viewBox="0 0 24 24"
    style={{ marginRight: "8px" }}
  >
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.133.564 4.133 1.547 5.86L0 24l6.307-1.573C8.027 23.36 9.973 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22.133c-1.88 0-3.62-.507-5.087-1.36l-.36-.213-3.74.973.987-3.64-.24-.387C2.507 15.62 2 13.88 2 12c0-5.513 4.487-10 10-10s10 4.487 10 10-4.487 10-10 10zm5.86-6.507c-.313-.16-1.847-.907-2.133-1.013-.287-.107-.493-.16-.7.16-.207.32-.807 1.013-.987 1.22-.18.207-.36.227-.667.08-.307-.147-1.293-.467-2.467-1.493-.92-.8-1.547-1.787-1.727-2.107-.18-.32-.02-.493.14-.653.14-.14.313-.36.467-.54.153-.18.207-.307.307-.513.1-.207.047-.427-.027-.6-.073-.173-.667-1.6-.913-2.2-.247-.6-.487-.507-.667-.527-.18-.02-.387-.02-.593-.02-.207 0-.54.08-.827.387-.287.307-1.087 1.067-1.087 2.6 0 1.533 1.113 3.013 1.267 3.213.153.2 2.2 3.36 5.333 4.707.747.333 1.333.533 1.787.68.753.247 1.433.213 1.973.107.6-.12 1.847-.76 2.107-1.493.26-.733.26-1.36.187-1.493-.073-.133-.287-.213-.6-.373z" />
  </svg>
);

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para o menu mobile
  const contact = "+5591992643006"; // WhatsApp number from Packages component

  // Detecta o scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Alterna o menu mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`container-header ${isScrolled ? "scrolled" : ""}`}>
      <Link to="/">
        <img src={logo} alt="Logo" width={180} />
      </Link>
      <button className="menu-toggle" onClick={toggleMenu}>
        <span className="hamburger"></span>
      </button>
      <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#servicos" onClick={() => setIsMenuOpen(false)}>
              Serviços
            </a>
          </li>
          <li>
            <Link to="/packages" onClick={() => setIsMenuOpen(false)}>
              Pacotes Turísticos
            </Link>
          </li>
          <li>
            <Link to="/vehicles" onClick={() => setIsMenuOpen(false)}>
              Veículos
            </Link>
          </li>
          <li>
            <a href="#quem-somos" onClick={() => setIsMenuOpen(false)}>
              Quem Somos
            </a>
          </li>

          <a
            href={`https://wa.me/${contact}`} // Added the default message back to the link
            className="whatsapp-button"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
          >
            <WhatsAppIcon />
            Entrar em Contato
          </a>
        </ul>
      </nav>
    </div>
  );
}
