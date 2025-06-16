import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#000000' }}>
    <div className="container">
      <Link className="navbar-brand fs-4 text-warning" to="/">Inicio</Link>
      <div className="collapse navbar-collapse show">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link fs-5 text-warning" to="/oferta">Oferta de Cursos</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
