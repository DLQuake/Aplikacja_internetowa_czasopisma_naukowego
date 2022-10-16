import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/CzescGlowna/HomePage/HomePage";
import Filtrowanie from "./components/CzescGlowna/Filtrowanie/Filtrowanie";
import ONas from "./components/CzescGlowna/ONas/ONas";
import InformacjeDlaAutorow from "./components/CzescGlowna/InformacjeDlaAutorow/InformacjeDlaAutorow"
import Kontakt from "./components/CzescGlowna/Kontakt/Kontakt"
import Register from "./components/CzescGlowna/Register/Register"
import Login from "./components/CzescGlowna/Login/Login"
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/filtrowanie" element={<Filtrowanie />} />
        <Route path="/o_nas" element={<ONas />} />
        <Route path="/informacje_dla_autorow" element={<InformacjeDlaAutorow />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/zarejestruj_sie" element={<Register />} />
        <Route path="/zaloguj_sie" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
