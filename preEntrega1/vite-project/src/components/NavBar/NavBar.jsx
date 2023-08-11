import React from 'react';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand ms-3" href="#">ReactTech Hub</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active me-3" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-3" href="#">Smartphones</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-3" href="#">Computadoras</a> 
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-3" href="#">Audio y Video</a> 
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-3" href="#">Ofertas Especiales</a> 
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
