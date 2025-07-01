import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../CartContext";
import RenderCondicional from "./RenderCondicional";

function Producto({ nombre, descripcion, precio, id, stock = 0 }) {
  const { agregarProducto } = useCart();

  const handleAgregar = (e) => {
    e.preventDefault();
    agregarProducto({ id, nombre, descripcion, precio, stock });
  };

  return (
    <div className="card">
      <Link to={`/productos/${id}`}>
        <h2>{nombre}</h2>
        <h4>{descripcion}</h4>
        <h2>${precio}</h2>
        <p>Stock: {stock}</p>
      </Link>

      <RenderCondicional
        condicion={stock === 0}
        componenteSi={
          <div className="sin-stock">
            <p>Producto sin stock</p>
          </div>
        }
        componenteNo={
          <button onClick={handleAgregar} className="btn-agregar">
            Agregar al carrito
          </button>
        }
      />
    </div>
  );
}

export default Producto;
