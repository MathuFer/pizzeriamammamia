import React from 'react';
import { Link } from 'react-router-dom';
import data from '../assets/json/pizzas.json';

function Catalogo() {
    return (
        <div>
            <h1>Catalogo</h1>
            <ul>
                {data.map(pizza => (
                    <li key={pizza.id}>
                        <Link to={`/pizza/${pizza.id}`}>{pizza.name}</Link>
                    </li>
                ))}
            </ul>
        </div>  
    );
}

export default Catalogo;
