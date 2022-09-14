import React from "react";
import { useState,  useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { productos } from "../productos"
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {

    const [item, setItem] = useState({});

    const { detalleId } = useParams();

    useEffect(() => {

        const getProduct = new Promise ((res, rej) => {
            setTimeout(() => {
                res(productos)
            }, 500)
        });

        getProduct.then(res => setItem(res.find(prod => prod.id === detalleId)));

    }, []);

    return (
        <div>
           <ItemDetail item={item}/> 
        </div>
    )
};

export default ItemDetailContainer;