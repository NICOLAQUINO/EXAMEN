import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import OfertaCursos from './pages/OfertaCursos';

const App = () => (
  <Router>
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Navbar />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/oferta" element={<OfertaCursos />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;
