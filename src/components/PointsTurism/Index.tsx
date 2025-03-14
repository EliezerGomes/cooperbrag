import "./index.css";

export function PointTurism() {
  return (
    <div className="container-tourist-packages">
      <div className="content-wrapper">
        {/* Left side: Text and button */}
        <div className="text-section">
          <h1>Viaje conosco com os melhores pacotes turísticos</h1>
          <p>
            Descubra o Pará como nunca antes, com nossos pacotes turísticos cuidadosamente elaborados! Oferecemos experiências inesquecíveis para os melhores destinos, como a deslumbrante Orla de Ajuruteua, a tranquila Praia de Caripi, a charmosa Orla de Bragança e o histórico Teatro da Paz. Nossos pacotes são pensados para proporcionar conforto, segurança e momentos únicos, garantindo que você aproveite ao máximo cada ponto turístico dessa região incrível.
          </p>
          <button className="saiba-mais-btn">Saiba mais +</button>
        </div>

        {/* Right side: Placeholder for the image */}
        <div className="image-section">
          {/* Placeholder for the image, replace with <img> when you have the source */}
          <div className="image-placeholder">
            <p>[Tourist Destination Image Placeholder]</p>
          </div>
        </div>
      </div>
    </div>
  );
}
