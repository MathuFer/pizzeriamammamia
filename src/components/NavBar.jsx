import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PedidoContext } from "../context/PedidoContext";
import "../assets/css/navbar.css";

export default function NavBar() {
    const { totalPedido } = useContext(PedidoContext);

    function formatPrice(price) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    return (
        <header>
            <nav>
                <Link className="link" to='/'>🍕 Pizzería Mamma Mia!</Link>
                <Link className="carrito" to='/carrito'>🛒 ${formatPrice(totalPedido)}</Link>
            </nav>
        </header>
    );
}
