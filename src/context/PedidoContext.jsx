import React, { createContext, useState } from "react";

export const PedidoContext = createContext();

export const PedidoProvider = ({ children }) => {
    const [pedido, setPedido] = useState([]);

    const agregarAlPedido = (producto) => {
        const productoExistenteIndex = pedido.findIndex(item => item.id === producto.id);
        if (productoExistenteIndex !== -1) {
            const nuevoPedido = [...pedido];
            nuevoPedido[productoExistenteIndex].cantidad += 1;
            setPedido(nuevoPedido);
        } else {
            setPedido([...pedido, {...producto, cantidad: 1}]);
        }
    };
    
    const disminuirAlPedido = (producto) => {
        const productoExistenteIndex = pedido.findIndex(item => item.id === producto.id);
        if (productoExistenteIndex !== -1) {
            const nuevoPedido = [...pedido];
            if (nuevoPedido[productoExistenteIndex].cantidad > 1) {
                nuevoPedido[productoExistenteIndex].cantidad -= 1;
                setPedido(nuevoPedido);
            } else {
                setPedido(pedido.filter(item => item.id !== producto.id));
            }
        }
    };

    const eliminarDelPedido = (id) => {
        setPedido(pedido.filter(item => item.id !== id));
    };

    const totalPedido = pedido.reduce((total, item) => total + (item.price * item.cantidad), 0);

    return (
        <PedidoContext.Provider value={{ data: pedido, agregarAlPedido, disminuirAlPedido, eliminarDelPedido, totalPedido }}>
            {children}
        </PedidoContext.Provider>
    );
};
