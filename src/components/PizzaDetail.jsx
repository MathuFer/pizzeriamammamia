import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import data from '../assets/json/pizzas.json';
import "../assets/css/PizzaDetail.css";
import { PedidoContext } from "../context/PedidoContext";

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function PizzaDetail() {
    const { id } = useParams();
    const pizza = data.find(pizza => pizza.id === id);

    if (!pizza) {
        return <div>Pizza no encontrada</div>;
    }

    const capitalizedPizzaName = capitalizeFirstLetter(pizza.name);
    const formattedPrice = formatPrice(pizza.price);
    
    const { agregarAlPedido } = useContext(PedidoContext);
    const handleClick = () => {
        agregarAlPedido(pizza);
    };

    return (
        <div className="detalle">
            <div className='imagen'>
                <img src={pizza.img} alt={pizza.name} />
            </div>
            <div className="info">
                <h2>{capitalizedPizzaName}</h2>
                <p>{pizza.desc}</p>
                <p><strong>Ingredientes:</strong></p>
                <ul>
                    {pizza.ingredients.map((ingredient, index) => (
                        <li key={index}>🍕 {ingredient}</li>
                    ))}
                </ul>
                <div className='container'>
                    <p><strong>Precio:</strong> ${formattedPrice}</p>
                    <button className="añadir2" onClick={handleClick}>Añadir 🛒</button>
                </div>
            </div>
        </div>
    );
}

export default PizzaDetail;
