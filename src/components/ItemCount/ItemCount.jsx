import React from "react";
import { useState } from "react";
import "../ItemCount/ItemCount.css"

const ItemCount = ({inicial, stock, agregar}) => {

    const [cantidad, setCantidad] = useState(inicial);
    const [itemStock, setStock] = useState(stock);
    const [itemAgregar, setAgregar] = useState(agregar);

    const decrementarCantidad = (valor) => {
        if(valor > 0){
            setCantidad(valor)
        };
    };

    const incrementarCantidad = (valor) => {
        if(valor <= itemStock){
            setCantidad(valor)
        };
    };

    const agregarProducto = () => {
        if(cantidad <= itemStock){
            setStock(itemStock - cantidad);
            setAgregar(itemAgregar + cantidad);
        };
    };



    return (
        <div className="container">
                <div>
                    <p className="text-center">Nombre del Producto</p>
                    <div className="input-group py-2">
                        <input type="button" className="btn btn-secondary" value="-" onClick={() =>{decrementarCantidad(cantidad -1)}}/>
                        <input type="text" className="form-control" value={cantidad} onChange={() => {}} />
                        <input type="button" className="btn btn-secondary" value="+" onClick={() => {incrementarCantidad (cantidad +1)}}/>
                    </div>
                    <div className="d-grid gap-2">
                        <input type="button" className="btn btn-secondary" value="Agregar Producto" onClick={() => {agregarProducto()}}/>
                    </div>
                    <p className="py-2 text-center">Productos Agregados: {itemAgregar}</p>
                </div>
        </div>
        
    )
};

export default ItemCount;