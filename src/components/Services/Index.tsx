import "./index.css";
import fretamento from "../../assets/fretamento.jpg";
import locacao from "../../assets/locacao.jpg";
import encomendas from "../../assets/encomendas.jpg";
import cargas from "../../assets/cargas.jpg";
import translado from "../../assets/translado.jpeg";
import cityTur from "../../assets/city-tur.jpg";

export function Services() {
  const services = [
    { name: "Fretamento", image: fretamento },
    { name: "Locação", image: locacao },
    { name: "Cargas", image: cargas },
    { name: "Encomendas", image: encomendas },
    { name: "Translado", image: translado },
    { name: "City tur", image: cityTur },
  ];

  return (
    <div className="container-card-services">
      <div className="description">
        <h1 className="title-service">Completa e Customizável</h1>
        <p>
          Conheça todas as nossas soluções logísticas, serviços e como transformarmos a
          customização de operações estruturais em um diferencial incomparável.
        </p>
      </div>
      <div className="container-services">
        {services.map((item, idx) => (
          <div
            key={idx}
            className="item-services"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <span className="service-title">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
