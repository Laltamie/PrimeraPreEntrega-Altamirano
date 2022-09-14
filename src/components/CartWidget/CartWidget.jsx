import React from "react";
import carritoLogo from "../../assets/images/carrito.png"
import "../Navegador/NavBar.css"

const CartWidget = () => {
    
    return (
        <div>
            <img className="logo-carrito" src={carritoLogo} alt="logo-carrito" />
        </div>
    )
};

export default CartWidget;