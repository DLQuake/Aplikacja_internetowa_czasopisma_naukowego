import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from "./components/CzescGlowna/HomePage";
import ONas from "./components/CzescGlowna/ONas";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/o_nas" element={<ONas />} />
      </Routes>
    </Router>
  );
}

export default App;
