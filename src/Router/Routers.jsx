import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Catalogo from "../pages/Catalogo";
import Carrito from "../pages/Carrito";
import PizzaDetail from "../components/PizzaDetail";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/pizza/:id" element={<PizzaDetail />} />
        </Routes>
    );
}
