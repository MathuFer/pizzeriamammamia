import React, { useContext, useEffect, useState } from "react";
import "../assets/css/Carrito.css";
import { PedidoContext } from "../context/PedidoContext";

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export default function Carrito() {
    const { data, eliminarDelPedido, agregarAlPedido, disminuirAlPedido } = useContext(PedidoContext);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        calcularTotal();
    }, [data]);

    const calcularTotal = () => {
        let sum = 0;
        data.forEach((pizza) => {
            sum += pizza.price * pizza.cantidad;
        });
        setTotal(sum);
    };

    const aumentarCantidad = (id) => {
        const pizza = data.find(item => item.id === id);
        agregarAlPedido({ ...pizza, cantidad: (pizza.cantidad || 0) + 1 });
    };
    
    const disminuirCantidad = (id) => {
        const pizza = data.find(item => item.id === id);
        if (pizza.cantidad > 1) {
            disminuirAlPedido({ ...pizza, cantidad: pizza.cantidad - 1 });
        } else {
            eliminarDelPedido(id);
        }
    };
    
    return (
        <div className="Carrito">
            <div className="Detalle">
                <h2>Detalle del pedido:</h2>
                {data.length ? (
                    <>
                        <ul>
                            {data.map((pizza) => (
                                <li key={pizza.id}>
                                    <img src={pizza.img} alt={pizza.name} />
                                    <div className="productos">
                                        <p>{capitalizeFirstLetter(pizza.name)}</p>
                                    </div>
                                    <div className="cantidades">
                                        <p>$ {formatPrice(pizza.price)}</p>
                                            <button className="mas" onClick={() => aumentarCantidad(pizza.id)}> + </button>
                                            <span>{pizza.cantidad || 0}</span>
                                            <button className="menos" onClick={() => disminuirCantidad(pizza.id)}> - </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <h3>Total: $ {formatPrice(total)}</h3>
                        <button className="Pagar">Ir a Pagar</button>
                    </>
                ) : (
                    <h2>No tienes pizzas seleccionadas</h2>
                )}
            </div>
        </div>
    );
}
