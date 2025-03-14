import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Index";
import { Carousel } from "./components/Carousel/Index";
import { MenuCars } from "./components/MenuCars/Index";
import { Services } from "./components/Services/Index";
import { PointTurism } from "./components/PointsTurism/Index";
import { Contact } from "./components/Contact/Index";
import { Footer } from "./components/Footer/Index";

//pages
import { Cars } from "./pages/Cars/Index";
import { Packages } from "./pages/packeges/Index";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          {/* Homepage ("/") */}
          <Route
            path="/"
            element={
              <>
                <Carousel />
                <Services />
                <MenuCars />
                <PointTurism />
                <Contact />
      
              </>
            }
          />

          {/* Packages Page ("/packages") */}
          <Route
            path="/packages"
            element={
              <>
                <Carousel />
                <Packages />
              </>
            }
          />

          {/* Vehicles Page ("/vehicles") */}
          <Route
            path="/vehicles"
            element={
              <>
                <Carousel />
                <Cars />
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;