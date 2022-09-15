import React from "react";
import { useState,  useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import productos  from '../productos'


const ItemDetailContainer = () => {

    const [item, setItem] = useState({});

    const { detalleid } = useParams();



    useEffect(() => {
        
        // const getProduct = () => new Promise ((res, rej) => {
        //     setTimeout(() => {
        //         res(productos)
        //     }, 500)
        // });
    
        const getProduct = new Promise ((res, rej) => {
            const product = productos.find(prod => prod.id == detalleid)
            setTimeout(() => {
                res(product)
            }, 2000)
        });

        
        getProduct.then((info) => {
            setItem(info)
        });

    }, []);
   

    return (
        <div>
           <ItemDetail item={item}/> 
        </div>
    )
};

export default ItemDetailContainer;