import Navigation from "./components/navigation";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import Destinations from "./pages/destinationpage";
import TripTypes from "./pages/TripTypes";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Destinations" element={<Destinations />} />
          <Route path="/trip-types" element={<TripTypes />} />
          <Route path="/contact-us" element={<ContactPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
