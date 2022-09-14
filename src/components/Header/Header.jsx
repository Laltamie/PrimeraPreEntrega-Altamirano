import React from "react";
import "./Header.css"
import imagenHeader from "../../assets/images/fondo_header.jpg"


const Header = () => {
    return (
        <div className="container contendedor-header">
            <ul>
                <p>
                    ¡ Bienvenid@ !
                </p>
                <p >
                Estilo es usar lo que te hace sentir bien!
                </p>
                <img  src={imagenHeader} alt="logo-carrito" />
            </ul>

        </div>
    )
};

export default Header;