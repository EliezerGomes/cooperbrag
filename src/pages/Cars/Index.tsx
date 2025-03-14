import "./index.css";

import onibusLdd1 from "../../assets/onibus-ldd-1.jpg";
import onibusLdd2 from "../../assets/onibus-ldd-2.jpg";
import onibusLdd3 from "../../assets/onibus-ldd-3.jpg";

import onibusLd from "../../assets/onibus-ld.jpg";
import onibusLd2 from "../../assets/onibus-ld2.jpg";
import onibusLd3 from "../../assets/onibus-ld3.jpg";
import onibusLd4 from "../../assets/onibus-ld4.png";

import vSpin1 from "../../assets/v-spin1.jpg";
import vSpin2 from "../../assets/v-spin2.jpg";
import vSpin3 from "../../assets/v-spin3.jpg";
import vSpin4 from "../../assets/v-spin4.png";

import sw41 from "../../assets/sw41.jpeg";
import sw42 from "../../assets/sw42.jpeg";
import sw43 from "../../assets/sw43.jpg";
import sw44 from "../../assets/sw44.jpg";

export function Cars() {
  const cars = [
    {
      name: "Ônibus LDD",
      images: [onibusLdd1, onibusLdd2, onibusLdd3],
    },
    {
      name: "Ônibus LD",
      images: [onibusLd, onibusLd2, onibusLd3, onibusLd4],
    },
    {
      name: "Veículo Spin",
      images: [vSpin1, vSpin2, vSpin3, vSpin4],
    },
    {
      name: "Veículo SW4",
      images: [sw41, sw42, sw43, sw44],
    },
  ];

  return (
    <div className="container-menu-cars">
      <h1>Conheça nossa frota de veículos para transporte e locação</h1>
      <p className="description">
        Nossa frota é composta por veículos modernos e de alta qualidade, como ônibus LDD, LD, Spins e SW4, todos rigorosamente mantidos para garantir segurança, conforto e eficiência em cada viagem ou locação.
      </p>

      <div className="menu-cars">
        {cars.map((item, index) => (
          <div className="item-car" key={index}>
            <h3 className="title-car">{item.name}</h3>
            <div className="car-images">
              {item.images.map((image, imgIndex) => (
                <div className="car-card" key={imgIndex}>
                  <img src={image} alt={`${item.name} ${imgIndex + 1}`} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}