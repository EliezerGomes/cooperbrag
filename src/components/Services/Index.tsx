import "./index.css";

export function Services() {
  const services = [
    {
      name: "Fretamento",
      icon: "",
    },
    {
      name: "Locação",
      icon: "",
    },
    {
      name: "Cargas",
      icon: "",
    },
    {
      name: "Encomendas",
      icon: "",
    },
    {
      name: "Translado",
      icon: "",
    },
    {
      name: "City tur",
      icon: "",
    },
    {
      name: "Bay nigth",
      icon: "",
    },
  ];

  return (
    <>
      <h2 className="title-service">Serviçoes prestados</h2>  
      <div className="container-services">
        {services.map((item, idx) => (
          <div key={idx} className="item-services">
            {item.name}
          </div>
        ))}
      </div>
    </>
  );
}
