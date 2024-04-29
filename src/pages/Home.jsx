import React from 'react';
import Pizzas from "../components/Pizzas";
import data from "../assets/json/pizzas.json";
import "../assets/css/Home.css";

export default function Home() {
    const pizzasToShow = data.slice(0, 4);

    return(
        <main>
            <div className="Banner">
                <div className="Titulo">
                    <h1>¡Pizzería Mamma Mia!</h1>
                    <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
                    <hr />
                </div>
            </div>
            <div>
                <div className="Menu">
                        <div className="pizzas-container">
                            {pizzasToShow.map((pizza) => (
                                <Pizzas key={pizza.id} pizza={pizza} />
                            ))}
                        </div>                           
                </div>
            </div>
        </main>
    )
}
