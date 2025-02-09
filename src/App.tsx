import { Header } from "./components/Header/Index"
import { Carousel } from "./components/Carousel/Index"
import { MenuCars } from "./components/MenuCars/Index"
import { Services } from "./components/Services/Index"
import { PointTurism } from "./components/PointsTurism/Index"
import { Contact } from "./components/Contact/Index"

function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <Services />
      <MenuCars />
      <PointTurism />
      <Contact />
    </div>
  )
}

export default App
