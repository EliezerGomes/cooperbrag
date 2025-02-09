import "./index.css";

import { Carousel } from "../Carousel/Index";

export function MenuCars() {
  const cars = [
    {
      name: "Carro 1",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNX-0p5rB_PI0B6oXnnUTkfCp_uZ1DBtcyYQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIOsQgOKrn_Qf4OMVjI0dU75e_hZlgEiUnKg&s",
      ],
    },
    {
      name: "Carro 2",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNX-0p5rB_PI0B6oXnnUTkfCp_uZ1DBtcyYQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIOsQgOKrn_Qf4OMVjI0dU75e_hZlgEiUnKg&s",
      ],
    },
    {
      name: "Carro 3",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNX-0p5rB_PI0B6oXnnUTkfCp_uZ1DBtcyYQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIOsQgOKrn_Qf4OMVjI0dU75e_hZlgEiUnKg&s",
      ],
    },
    {
      name: "Carro 4",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNX-0p5rB_PI0B6oXnnUTkfCp_uZ1DBtcyYQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIOsQgOKrn_Qf4OMVjI0dU75e_hZlgEiUnKg&s",
      ],
    },
  ];

  return (
    <div className="container-menu-cars">
      <h2>Conheça nossa frota de veículos</h2>

      <div className="menu-cars">
        {cars.map((item, index) => (
          <div className="item-car" key={index}>
            <h3 className="title-car">{item.name}</h3>

            <Carousel imgs={item.images} />
          </div>
        ))}
      </div>
    </div>
  );
}
