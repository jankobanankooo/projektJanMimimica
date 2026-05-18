import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import StaroSelo from "./pages/StaroSelo";
import Home from "./pages/Home";
import Restaurants from "./pages/Restaurants";
import Apartments from "./pages/Apartments";
import Beaches from "./pages/Beaches";
import Contact from "./pages/Contact";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restorani" element={<Restaurants />} />
          <Route path="/apartmani" element={<Apartments />} />
          <Route path="/plaze" element={<Beaches />} />
          <Route path="/staro-selo" element={<StaroSelo />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
