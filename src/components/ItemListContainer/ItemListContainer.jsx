import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import productos  from '../productos'

const ItemListContainer = ({greeting}) => {

    const [data, setData] = useState([]);

    const {categoriaId} = useParams();

    useEffect(() => {

        const getProduct = new Promise ((res, rej) => {
            setTimeout(() => {
                res(productos)
            }, 500)
        });
        

        if(categoriaId){
            getProduct.then(res => setData(res.filter(producto => producto.categoria === categoriaId)));
        }else {
            getProduct.then(res => setData(res));
        };

        

    }, [categoriaId])

    return (
        <div >
            <div className="greeting py-10">
                <h5>{greeting}</h5>
                <ItemList data={data}/>
            </div>
        </div>
    )
};

export default ItemListContainer;