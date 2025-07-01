import React, { useState } from "react";
import { useCart } from "../CartContext";
import RenderCondicional from "./RenderCondicional";

function CartWidget() {
  const {
    carrito,
    totalProductos,
    totalPrecio,
    eliminarProducto,
    vaciarCarrito,
  } = useCart();
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  return (
    <div className="cart-widget">
      <button
        className="cart-button"
        onClick={() => setMostrarCarrito(!mostrarCarrito)}
      >
        🛒 ({totalProductos})
      </button>

      {mostrarCarrito && (
        <div className="cart-dropdown">
          <RenderCondicional
            condicion={carrito.length === 0}
            componenteSi={<p>Carrito vacío</p>}
            componenteNo={
              <div>
                {carrito.map((producto) => (
                  <div key={producto.id} className="cart-item">
                    <h4>{producto.nombre}</h4>
                    <p>Cantidad: {producto.cantidad}</p>
                    <p>${producto.precio * producto.cantidad}</p>
                    <button onClick={() => eliminarProducto(producto.id)}>
                      Eliminar
                    </button>
                  </div>
                ))}
                <div className="cart-total">
                  <h3>Total: ${totalPrecio}</h3>
                  <button onClick={vaciarCarrito} className="btn-vaciar">
                    Vaciar Carrito
                  </button>
                </div>
              </div>
            }
          />
        </div>
      )}
    </div>
  );
}

export default CartWidget;
