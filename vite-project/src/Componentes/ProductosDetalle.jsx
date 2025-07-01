import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useCart } from "../CartContext";
import RenderCondicional from "./RenderCondicional";

function Detalle() {
  const { id } = useParams();
  const { agregarProducto } = useCart();
  const [cantidad, setCantidad] = useState(1);
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerProducto = async () => {
      if (!id) {
        setCargando(false);
        return;
      }

      try {
        setCargando(true);
        const docRef = doc(db, "productos", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProducto({
            id: docSnap.id,
            ...docSnap.data(),
          });
          setError(null);
        } else {
          setProducto(null);
          setError(null);
        }
      } catch (error) {
        console.error("Error al obtener producto:", error);
        setError("Error al cargar el producto");
        setProducto(null);
      } finally {
        setCargando(false);
      }
    };

    obtenerProducto();
  }, [id]);

  const handleAgregar = () => {
    if (producto && cantidad <= (producto.stock || 0)) {
      for (let i = 0; i < cantidad; i++) {
        agregarProducto(producto);
      }
    }
  };

  if (cargando) {
    return (
      <div className="loader">
        <div className="loader-spinner"></div>
        <p>Cargando producto...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <h2>Error</h2>
        <p>{error}</p>
        <Link to="/productos" className="back-link">
          Volver a productos
        </Link>
      </div>
    );
  }

  return (
    <RenderCondicional
      condicion={!producto}
      componenteSi={
        <div className="error">
          <h1>El producto seleccionado no existe</h1>
          <p>No se pudo encontrar el producto con ID: {id}</p>
          <Link to="/productos" className="back-link">
            Volver a productos
          </Link>
        </div>
      }
      componenteNo={
        <div className="product-detail">
          <h1>Detalles del producto</h1>
          <h2>{producto.nombre}</h2>
          <p>{producto.descripcion}</p>
          <h2>${producto.precio}</h2>

          <RenderCondicional
            condicion={!producto.stock || producto.stock === 0}
            componenteSi={
              <div className="sin-stock">
                <p>Producto sin stock</p>
              </div>
            }
            componenteNo={
              <div className="product-actions">
                <div className="quantity-selector">
                  <button
                    onClick={() => cantidad > 1 && setCantidad(cantidad - 1)}
                    disabled={cantidad <= 1}
                  >
                    -
                  </button>
                  <span>{cantidad}</span>
                  <button
                    onClick={() =>
                      cantidad < (producto.stock || 0) &&
                      setCantidad(cantidad + 1)
                    }
                    disabled={cantidad >= (producto.stock || 0)}
                  >
                    +
                  </button>
                </div>
                <button onClick={handleAgregar} className="add-to-cart-btn">
                  Agregar al carrito
                </button>
                <p>Stock disponible: {producto.stock || 0}</p>
              </div>
            }
          />

          <Link to="/productos" className="back-link">
            Volver a productos
          </Link>
        </div>
      }
    />
  );
}

export default Detalle;
