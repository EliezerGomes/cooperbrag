import "./index.css";
import { useState } from "react";

export function PointTurism() {
  const [tab, setTab] = useState(0);
  const contact = "+5591992643006";
  const defaultMessage = "Quero obter o pacote ";
  const arrayImages = [
    {
      image: "",
      name: "Orla de ajuruteua",
      subtitle:
        "Esse pacote turístico inclui o translado completo para a orla de ajuruteua",
      tab: 0,
    },
    {
      image: "",
      name: "Praia de Crispim",
      subtitle:
        "Esse pacote turístico inclui o translado completo para a praia de Crispim",
      tab: 0,
    },
    {
      image: "",
      name: "Praia de Caripi",
      subtitle:
        "Esse pacote turístico inclui o translado completo para a praia de Caripi",
      tab: 0,
    },
    {
      image: "",
      name: "Orla de Bragança",
      subtitle:
        "Esse pacote turístico inclui o translado completo para a orla de Bragança",
      tab: 0,
    },
    {
      image: "",
      name: "Igreja de São Benedito",
      subtitle:
        "Esse pacote turístico inclui o translado completo para a Igreja de São Benedito - Bragança",
      tab: 1,
    },
    {
      image: "",
      name: "Centro histórico de Bragança",
      subtitle:
        "Esse pacote turístico inclui o translado completo para o centro histórico de Bragança",
      tab: 1,
    },
    {
      image: "",
      name: "Orla do maçarico Salinópolis",
      subtitle:
        "Esse pacote turístico inclui o translado completo para a orla do maçarico - Salinópolis",
      tab: 0,
    },
    {
      image: "",
      name: "Ver o peso",
      subtitle:
        "Esse pacote turístico inclui o translado completo para o ver o peso - Belém",
      tab: 1,
    },
    {
      image: "",
      name: "Teatro da paz",
      subtitle:
        "Esse pacote turístico inclui o translado completo para o teatro da paz - Belém",
      tab: 1,
    },
    {
      image: "",
      name: "Basílica nossa senhora de nazaré",
      subtitle:
        "Esse pacote turístico inclui o translado completo para a basílica nossa senhora de nazaré - Belém",
      tab: 1,
    },
    {
      image: "",
      name: "Bosque rodrigues alves",
      subtitle:
        "Esse pacote turístico inclui o translado completo para o bosque Rodrigues Alves - Belém",
      tab: 1,
    },
    {
      image: "",
      name: "Ver o rio",
      subtitle:
        "Esse pacote turístico inclui o translado completo para o ver o rio - Belém",
      tab: 1,
    },
    {
      image: "",
      name: "Estação das docas",
      subtitle:
        "Esse pacote turístico inclui o translado completo para a estação das docas - Belém",
      tab: 1,
    },
    {
      image: "",
      name: "Forte do presépio",
      subtitle:
        "Esse pacote turístico inclui o translado completo para o forte do presépio - Belém",
      tab: 1,
    },
  ];

  const tabs = [
    {
      id: 0,
      title: "Turísticos",
    },
    {
      id: 1,
      title: "Pontos Históricos",
    },
  ];

  function setValueTab(id: number) {
    setTab(id);
  }
  return (
    <section>
      <div
        className="turismo-header"
        data-aos="fade-up"
        data-aos-anchor="[data-aos-id-blocks]"
      >
        <h2 className="turismo-title">Pacotes</h2>
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
                  <img src={item.image} width={400} height={200} />
                </div>
                <hr className="turismo-divider" />
                <h4 className="turismo-card-title">{item.name}</h4>
                <p className="turismo-card-subtitle">◾ {item.subtitle}</p>
                <a
                  href={`https://wa.me/${contact}?text=${encodeURIComponent(
                    defaultMessage + item.name
                  )}`}
                  className="turismo-button"
                >
                  Quero esse pacote
                </a>
              </div>
            )
        )}
      </div>
    </section>
  );
}
