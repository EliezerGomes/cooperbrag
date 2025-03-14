import "./index.css";

export function MenuCars() {
  return (
    <div className="container-menu-cars">
      <div className="content-wrapper">
        {/* Left side: Placeholder for the vehicle image */}
        <div className="image-section">
          {/* You can add your vehicle image here */}
          <div className="image-placeholder">
            {/* Placeholder for the image, replace with <img> when you have the source */}
            <p>[Vehicle Image Placeholder]</p>
          </div>
        </div>

        {/* Right side: Text and button */}
        <div className="text-section">
          <h1>Contamos com veículos de alta qualidade</h1>
          <p>
            Nossos veículos são selecionados com rigor para garantir a máxima confiabilidade e segurança em cada viagem. Com manutenção regular, tecnologia de ponta e uma frota moderna, asseguramos que o seu serviço seja efetudo com sucesso. Confie em nossa experiência para atender às suas necessidades de transporte com eficiência e qualidade.
          </p>
          <button className="saiba-mais-btn">Saiba mais +</button>
        </div>
      </div>
    </div>
  );
}