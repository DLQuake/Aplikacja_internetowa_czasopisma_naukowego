import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import StronaGłowna from './components/CzescGlowna/StronaGłowna';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<StronaGłowna />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
