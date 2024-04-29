import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from "./components/NavBar"
import Routes from './Router/Routers'
import { PedidoProvider } from './context/PedidoContext'; 

function App() {
  return (
    <PedidoProvider> {}
      <BrowserRouter>
        <NavBar />
        <Routes />
      </BrowserRouter>
    </PedidoProvider>
  );
}

export default App;
