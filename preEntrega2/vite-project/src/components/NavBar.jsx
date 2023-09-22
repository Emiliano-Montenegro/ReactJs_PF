import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand ms-3" to="/">ReactTech Hub</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active me-3" to="/#">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link me-3" to="/category/Smartphones">Smartphones</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link me-3" to="/category/Notebooks">Notebooks</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link me-3" to="/category/Televisores">Televisores</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link me-3" to="/category/Ofertas">Ofertas Especiales</Link>
                        </li>
                    </ul>
                </div>
                <div className="d-flex me-3">
                    <CartWidget />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;



