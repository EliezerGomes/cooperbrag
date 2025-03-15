import "./index.css";
import { useState } from "react";

import ajuruteua from "../../assets/orla-ajuruteua.jpg";
import orlaAjuruteua2 from "../../assets/orla-ajuruteua2.jpg";
import orlaAjuruteua3 from "../../assets/orla-ajuruteua3.jpg";

import braganca from "../../assets/orla-braganca.jpg";
import orlaBraganca2 from "../../assets/Orla-braganca.jpg";
import orlaBraganca3 from "../../assets/orla-braganca2.jpg";

import predios from "../../assets/predios-historcos.jpg";
import predios2 from "../../assets/igreja-sao-benedito2.jpg";
import predios3 from "../../assets/igreja-sao-benedito3.jpg";

import verPeso from "../../assets/mercado-ver-o-peso.jpg";
import verPeso2 from "../../assets/ver-peso2.jpg";
import verPeso3 from "../../assets/ver-peso3.jpg";

import teatroPaz from "../../assets/Belem-Teatro-Paz.jpg";
import teatroPaz2 from "../../assets/teatro-paz2.jpg";
import teatroPaz3 from "../../assets/teatro-paz3.jpg";

import basilica from "../../assets/basilica-nossa-senhora-nazare.jpg";
import basilica2 from "../../assets/basilica2.jpg";
import basilica3 from "../../assets/basilica3.jpg";

import bosque from "../../assets/bosque-rodrigues-alves.jpg";
import bosque2 from "../../assets/bosque2.jpg";
import bosque3 from "../../assets/bosque3.jpg";

import verRio from "../../assets/complexo-turistico-ver-o-rio.jpg";
import verRio2 from "../../assets/ver-rio2.jpg";
import verRio3 from "../../assets/ver-rio3.jpg";

import docas from "../../assets/estacao-docas.jpg";
import docas2 from "../../assets/docas2.jpg";
import docas3 from "../../assets/docas3.jpg";

import fortePresepio from "../../assets/forte-presepio.jpg";
import fortePresepio2 from "../../assets/castelo2.jpg";
import fortePresepio3 from "../../assets/castelo3.jpg";

import macarico from "../../assets/orla-de-macarico.jpg";
import orlaMacarico2 from "../../assets/orla-macarico2.jpg";
import orlaMacarico3 from "../../assets/orla-macarico3.jpg";

import caripi from "../../assets/praia-caripi.jpg";
import praiaCaripi2 from "../../assets/praia-caripi2.jpg";
import praiaCaripi3 from "../../assets/praia-caripi3.jpg";

import crispim from "../../assets/praia-crispim.jpg";
import praiaCrispim2 from "../../assets/praia-do-crispim-2.jpg";
import praiaCrispim3 from "../../assets/praia-crispim3.jpg";

export function Packages() {
  const [tab, setTab] = useState(0);
  const [selectedPackage, setSelectedPackage] = useState(null); // State for modal
  const [expandedImage, setExpandedImage] = useState(null); // State for expanded image on mobile
  const contact = "+5591992643006";
  const defaultMessage = "Quero obter o pacote ";

  const arrayImages = [
    {
      image: ajuruteua,
      name: "Orla de Ajuruteua",
      subtitle: "Esse pacote turístico inclui o translado completo para a Orla de Ajuruteua",
      tab: 0,
      description:
        "A Orla de Ajuruteua é um paraíso à beira-mar com águas cristalinas e paisagens exuberantes. Aproveite a tranquilidade e a beleza natural deste destino imperdível.",
      images: [ajuruteua, orlaAjuruteua2, orlaAjuruteua3],
    },
    {
      image: crispim,
      name: "Praia de Crispim",
      subtitle: "Esse pacote turístico inclui o translado completo para a Praia de Crispim",
      tab: 0,
      description:
        "A Praia de Crispim oferece areias douradas e um mar sereno, ideal para relaxar e desfrutar de momentos inesquecíveis na natureza.",
      images: [crispim, praiaCrispim2, praiaCrispim3],
    },
    {
      image: caripi,
      name: "Praia de Caripi",
      subtitle: "Esse pacote turístico inclui o translado completo para a Praia de Caripi",
      tab: 0,
      description:
        "Conheça a Praia de Caripi, famosa por suas ondas suaves e cenários naturais que encantam visitantes de todas as idades.",
      images: [caripi, praiaCaripi2, praiaCaripi3],
    },
    {
      image: braganca,
      name: "Orla de Bragança",
      subtitle: "Esse pacote turístico inclui o translado completo para a Orla de Bragança",
      tab: 0,
      description:
        "A Orla de Bragança combina cultura local com vistas deslumbrantes, perfeita para uma experiência autêntica à beira-mar.",
      images: [braganca, orlaBraganca2, orlaBraganca3],
    },
    {
      image: predios,
      name: "Igreja de São Benedito",
      subtitle: "Esse pacote turístico inclui o translado completo para a Igreja de São Benedito - Bragança",
      tab: 1,
      description:
        "A Igreja de São Benedito é um marco histórico com arquitetura rica e significado cultural profundo em Bragança.",
      images: [predios, predios2, predios3], // Added new images
    },
    {
      image: macarico,
      name: "Orla do Maçarico Salinópolis",
      subtitle: "Esse pacote turístico inclui o translado completo para a Orla do Maçarico - Salinópolis",
      tab: 0,
      description:
        "A Orla do Maçarico em Salinópolis é famosa por suas praias vibrantes e atmosfera animada, ideal para todas as idades.",
      images: [macarico, orlaMacarico2, orlaMacarico3],
    },
    {
      image: verPeso,
      name: "Ver-o-Peso",
      subtitle: "Esse pacote turístico inclui o translado completo para o Ver-o-Peso - Belém",
      tab: 1,
      description:
        "O Ver-o-Peso é um mercado tradicional de Belém, cheio de cores, sabores e história que refletem a cultura amazônica.",
      images: [verPeso, verPeso2, verPeso3], // Added new images
    },
    {
      image: teatroPaz,
      name: "Teatro da Paz",
      subtitle: "Esse pacote turístico inclui o translado completo para o Teatro da Paz - Belém",
      tab: 1,
      description:
        "O Teatro da Paz é uma joia arquitetônica de Belém, com interiores elegantes e um rico legado cultural.",
      images: [teatroPaz, teatroPaz2, teatroPaz3], // Added new images
    },
    {
      image: basilica,
      name: "Basílica Nossa Senhora de Nazaré",
      subtitle: "Esse pacote turístico inclui o translado completo para a Basílica Nossa Senhora de Nazaré - Belém",
      tab: 1,
      description:
        "A Basílica Nossa Senhora de Nazaré é um santuário majestoso, centro de devoção e beleza arquitetônica em Belém.",
      images: [basilica, basilica2, basilica3], // Added new images
    },
    {
      image: bosque,
      name: "Bosque Rodrigues Alves",
      subtitle: "Esse pacote turístico inclui o translado completo para o Bosque Rodrigues Alves - Belém",
      tab: 1,
      description:
        "O Bosque Rodrigues Alves é um oásis verde em Belém, com fauna e flora que oferecem um refúgio natural na cidade.",
      images: [bosque, bosque2, bosque3], // Added new images
    },
    {
      image: verRio,
      name: "Ver-o-Rio",
      subtitle: "Esse pacote turístico inclui o translado completo para o Ver-o-Rio - Belém",
      tab: 1,
      description:
        "Ver-o-Rio é um ponto panorâmico em Belém, perfeito para admirar a beleza do rio e o pôr do sol.",
      images: [verRio, verRio2, verRio3], // Added new images
    },
    {
      image: docas,
      name: "Estação das Docas",
      subtitle: "Esse pacote turístico inclui o translado completo para a Estação das Docas - Belém",
      tab: 1,
      description:
        "A Estação das Docas é um complexo revitalizado em Belém, unindo gastronomia, cultura e vistas incríveis.",
      images: [docas, docas2, docas3], // Added new images
    },
    {
      image: fortePresepio,
      name: "Forte do Presépio",
      subtitle: "Esse pacote turístico inclui o translado completo para o Forte do Presépio - Belém",
      tab: 1,
      description:
        "O Forte do Presépio é um símbolo histórico de Belém, com vistas deslumbrantes e uma rica narrativa colonial.",
      images: [fortePresepio, fortePresepio2, fortePresepio3], // Added new images
    },
  ];

  const tabs = [
    { id: 0, title: "Turísticos" },
    { id: 1, title: "Pontos Históricos" },
  ];

  function setValueTab(id) {
    setTab(id);
  }

  const openModal = (packageData) => {
    setSelectedPackage(packageData);
    setExpandedImage(null); // Reset expanded image when opening a new modal
  };

  const closeModal = () => {
    setSelectedPackage(null);
    setExpandedImage(null); // Reset expanded image when closing modal
  };

  const toggleExpandImage = (index) => {
    setExpandedImage(expandedImage === index ? null : index); // Toggle expanded state
  };

  return (
    <section>
      <div className="turismo-header" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
        <h2 className="turismo-title">Os melhores pacotes turísticos para os destinos mais procurados na região</h2>
        <p className="turismo-description">
          Explore a beleza única dos destinos mais encantadores da região, com paisagens naturais deslumbrantes e pontos históricos fascinantes. Não perca essas ofertas imperdíveis!
        </p>
      </div>

      <div className="turismo-tabs" data-aos-id-blocks>
        {tabs.map((item) => (
          <button
            className={`tab-button ${item.id === tab ? "active" : ""}`}
            onClick={() => setValueTab(item.id)}
            value={item.id}
            key={item.id}
          >
            {item.title}
          </button>
        ))}
      </div>

      <div className="turismo-grid" data-aos-id-blocks>
        {arrayImages.map(
          (item, idx) =>
            item.tab === tab && (
              <div
                className="turismo-card"
                data-aos="fade-up"
                data-aos-anchor="[data-aos-id-blocks]"
                key={idx}
              >
                <div className="turismo-image">
                  <img src={item.image} width={400} height={200} alt={item.name} />
                </div>
                <hr className="turismo-divider" />
                <h4 className="turismo-card-title">{item.name}</h4>
                <p className="turismo-card-subtitle">◾ {item.subtitle}</p>
                <button
                  className="turismo-button view-offer"
                  onClick={() => openModal(item)}
                >
                  Visualizar oferta
                </button>
              </div>
            )
        )}
      </div>

      {/* Modal */}
      {selectedPackage && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            <h3>{selectedPackage.name}</h3>
            <p>{selectedPackage.description}</p>
            <div className="modal-images">
              {selectedPackage.images.map((img, index) => (
                <div
                  key={index}
                  className={`modal-image-wrapper ${expandedImage === index ? "expanded" : ""}`}
                  onClick={() => toggleExpandImage(index)} // Click to expand on mobile
                >
                  <img
                    src={img}
                    alt={`${selectedPackage.name} ${index + 1}`}
                    className="modal-image"
                  />
                </div>
              ))}
            </div>
            <a
              href={`https://wa.me/${contact}?text=${encodeURIComponent(
                defaultMessage + selectedPackage.name
              )}`}
              className="turismo-button request-package"
            >
              Quero esse pacote
            </a>
          </div>
        </div>
      )}
    </section>
  );
}