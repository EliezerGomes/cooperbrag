import "./index.css";
import logo from "../../assets/logo.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for routing

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para o menu mobile

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
        </ul>
      </nav>
    </div>
  );
}