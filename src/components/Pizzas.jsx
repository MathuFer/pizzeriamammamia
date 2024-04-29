import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Pizzas.css";
import { PedidoContext } from "../context/PedidoContext";

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function Pizzas({ pizza }) {
    const { agregarAlPedido } = useContext(PedidoContext);

    const capitalizedPizzaName = capitalizeFirstLetter(pizza.name);
    const formattedPrice = formatPrice(pizza.price);

    const handleClick = () => {
        agregarAlPedido(pizza);
    };

    return (
        <div className="card">
            <img src={pizza.img} alt={capitalizedPizzaName} className="card-img-top" />
            <div className="card-body">
                <h2 className="card-title">{capitalizedPizzaName}</h2>
                <hr />
                <p>Ingredientes:</p>
                <ul className="ingredients-list">
                    {pizza.ingredients.map((ingredient, index) => (
                        <li key={index}>🍕 {ingredient}</li>
                    ))}
                </ul>
                <hr />
                <p className="card-text">$ {formattedPrice}</p>
                <hr />
                <div className="botones">
                    <Link to={`/pizza/${pizza.id}`} className="vermas">Ver más 👀</Link>
                    <button className="añadir" onClick={handleClick}>Añadir 🛒</button>
                </div>
            </div>
        </div>
    );
}

export default Pizzas;
