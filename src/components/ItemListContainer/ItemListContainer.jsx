import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
// import { productos } from "../productos";

const ItemListContainer = ({greeting, categoria}) => {

    const [data, setData] = useState([]);

    const {categoriaId} = useParams();

    useEffect(() => {

        const productos = [
            {id: 1, categoria: "invierno", name: "Conjunto", precio: "30000",img: "./producto-1.jpg"},
            {id: 2, categoria: "invierno", name: "Conjunto Primavera",precio: "35000",img: "./producto-2.jpg"},
            {id: 3, categoria: "verano", name: "Vestido",precio: "25000", img: "./producto-3.jpg"},
            {id: 4, categoria: "invierno", name: "Sweater", precio: "18000",img: "./producto-4.jpg"},
            {id: 5, categoria: "verano", name: "Top",precio: "9000",img: "./producto-5.jpg"},
            {id: 6, categoria: "verano", name: "Vestido Verano",precio: "50000",img: "./producto-6.jpg"},
            {id: 7, categoria: "verano", name: "Catsuit Verano",precio: "36000",img: "./producto-7.jpg"},
            {id: 8, categoria: "invierno", name: "Camisa",precio: "13000",img: "./producto-8.jpg"},
            {id: 9, categoria: "invierno", name: "Campera",precio: "11000",img: "./producto-9.jpg"}
           
          ]

        const getData = new Promise(resolve => {
            setTimeout(() =>{
                resolve(productos);
            }, 500);
        });
        if(categoriaId){
            getData.then(res => setData(res.filter(producto => producto.categoria === categoriaId)));
        }else {
            getData.then(res => setData(res));
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