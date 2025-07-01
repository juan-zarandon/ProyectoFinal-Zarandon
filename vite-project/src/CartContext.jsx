import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  const agregarProducto = (producto) => {
    const productoExiste = carrito.find((item) => item.id === producto.id);

    if (productoExiste) {
      setCarrito(
        carrito.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      );
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  const eliminarProducto = (id) => {
    setCarrito(carrito.filter((item) => item.id !== id));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const totalProductos = carrito.reduce(
    (total, item) => total + item.cantidad,
    0
  );
  const totalPrecio = carrito.reduce(
    (total, item) => total + item.precio * item.cantidad,
    0
  );

  return (
    <CartContext.Provider
      value={{
        carrito,
        agregarProducto,
        eliminarProducto,
        vaciarCarrito,
        totalProductos,
        totalPrecio,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
