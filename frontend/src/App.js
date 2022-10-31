import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/CzescGlowna/HomePage/HomePage";
import Filtrowanie from "./components/CzescGlowna/Filtrowanie/Filtrowanie";
import ONas from "./components/CzescGlowna/ONas/ONas";
import InformacjeDlaAutorow from "./components/CzescGlowna/InformacjeDlaAutorow/InformacjeDlaAutorow"
import Kontakt from "./components/CzescGlowna/Kontakt/Kontakt"
import Register from "./components/CzescGlowna/Register/Register"
import Login from "./components/CzescGlowna/Login/Login"

import Autor from "./components/CzescAutor/Autor/Autor";
import DodajPublikacje from "./components/CzescAutor/DodajPublikacje/DodajPublikacje";

import Recenzent from "./components/CzescRecenzent/Recenzent/Recenzent";
import Publikacje from "./components/CzescRecenzent/Publikacje/Publikacje";

import Redaktor from "./components/CzescRedaktor/Redaktor/Redaktor";

import Wydawnictwo from "./components/CzescWydawnictwo/Wydawnictwo/Wydawnictwo";
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

        <Route path="/autor" element={<Autor />} />
        <Route path="/dodaj_publikacje" element={<DodajPublikacje />} />

        <Route path="/recenzent" element={<Recenzent />} />
        <Route path="/publikacje" element={<Publikacje />} />

        <Route path="/redaktor" element={<Redaktor />} />

        <Route path="/wydawnictwo" element={<Wydawnictwo />} />
      </Routes>
    </Router>
  );
}

export default App;
