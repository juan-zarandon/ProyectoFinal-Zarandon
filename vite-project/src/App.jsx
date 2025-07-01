import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./CartContext";
import Layout from "./Componentes/Layout";
import Home from "./Componentes/Home";
import Error from "./Componentes/Error";
import Nosotros from "./Componentes/Nosotros";
import Productos from "./Componentes/Productos";
import Detalle from "./Componentes/ProductosDetalle";
import React from "react";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="nosotros" element={<Nosotros />} />
            <Route path="productos" element={<Productos />} />
            <Route path="productos/:id" element={<Detalle />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
