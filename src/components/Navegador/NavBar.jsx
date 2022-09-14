import React from "react";
import "../Navegador/NavBar.css"
import logo from "../../assets/images/logo.png"
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="container">
            <ul className="col-logo  nav justify-content-center">
                <img src={logo} className="nav-logo img-fluid" alt="logo"/>
            </ul>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link to="/" className="nav-link active" aria-current="page">Inicio</Link>
                </li>
                <li className="nav-item">
                <Link to="/categoria/invierno" className="nav-link " >Invierno</Link>
                </li>
                <li className="nav-item">
                    <Link to="/categoria/verano" className="nav-link "  >Verano</Link>
                </li>
                <li className="nav-item">
                    {/* <a className="nav-link" href="#">Contacto</a> */}
                </li>
            </ul>
            <ul className="nav justify-content-center">
                <a href=""><CartWidget /></a>
            </ul>
            <hr />
        </div>
    )
};

export default NavBar;