import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Index";
import { Carousel } from "./components/Carousel/Index";
import { MenuCars } from "./components/MenuCars/Index";
import { Services } from "./components/Services/Index";
import { PointTurism } from "./components/PointsTurism/Index";
import { Contact } from "./components/Contact/Index";
import { Footer } from "./components/Footer/Index";

// Pages
import { Cars } from "./pages/Cars/Index";
import { Packages } from "./pages/packeges/Index";

// WhatsApp Icon SVG (reused from Header)
const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24" // Slightly larger for better visibility
    height="24"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.133.564 4.133 1.547 5.86L0 24l6.307-1.573C8.027 23.36 9.973 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22.133c-1.88 0-3.62-.507-5.087-1.36l-.36-.213-3.74.973.987-3.64-.24-.387C2.507 15.62 2 13.88 2 12c0-5.513 4.487-10 10-10s10 4.487 10 10-4.487 10-10 10zm5.86-6.507c-.313-.16-1.847-.907-2.133-1.013-.287-.107-.493-.16-.7.16-.207.32-.807 1.013-.987 1.22-.18.207-.36.227-.667.08-.307-.147-1.293-.467-2.467-1.493-.92-.8-1.547-1.787-1.727-2.107-.18-.32-.02-.493.14-.653.14-.14.313-.36.467-.54.153-.18.207-.307.307-.513.1-.207.047-.427-.027-.6-.073-.173-.667-1.6-.913-2.2-.247-.6-.487-.507-.667-.527-.18-.02-.387-.02-.593-.02-.207 0-.54.08-.827.387-.287.307-1.087 1.067-1.087 2.6 0 1.533 1.113 3.013 1.267 3.213.153.2 2.2 3.36 5.333 4.707.747.333 1.333.533 1.787.68.753.247 1.433.213 1.973.107.6-.12 1.847-.76 2.107-1.493.26-.733.26-1.36.187-1.493-.073-.133-.287-.213-.6-.373z" />
  </svg>
);

function App() {
  const contact = "+5591992643006"; // WhatsApp number
  const defaultMessage = "Quero entrar em contato sobre os serviços!"; // Pre-filled message

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

        {/* Floating WhatsApp Button (visible only on mobile) */}
        <a
          href={`https://wa.me/${contact}?text=${encodeURIComponent(defaultMessage)}`}
          className="floating-whatsapp-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon />
        </a>

        <Footer />
      </div>
    </Router>
  );
}

export default App;