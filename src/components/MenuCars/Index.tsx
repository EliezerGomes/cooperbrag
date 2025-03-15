import "./index.css";
import sw44 from "../../assets/sw44.jpg";
import { Link } from "react-router-dom"; // Import Link for navigation

export function MenuCars() {
  return (
    <div className="container-menu-cars">
      <div className="content-wrapper">
        {/* Left side: Vehicle image */}
        <div className="image-section">
          <div className="image-placeholder">
            <img src={sw44} alt="Carro" />
          </div>
        </div>

        {/* Right side: Text and button */}
        <div className="text-section">
          <h1>Contamos com veículos de alta qualidade</h1>
          <p>
            Nossos veículos são selecionados com rigor para garantir a máxima confiabilidade e segurança em cada viagem. Com manutenção regular, tecnologia de ponta e uma frota moderna, asseguramos que o seu serviço seja efetudo com sucesso. Confie em nossa experiência para atender às suas necessidades de transporte com eficiência e qualidade.
          </p>
          <Link to="/vehicles" className="saiba-mais-btn">
            Saiba mais +
          </Link>
        </div>
      </div>
    </div>
  );
}