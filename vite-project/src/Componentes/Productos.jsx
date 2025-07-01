import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import Producto from "./Producto";
import Loader from "./Loader";
import RenderCondicional from "./RenderCondicional";

function Productos() {
  const [cargando, setCargando] = useState(true);
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        setCargando(true);
        const querySnapshot = await getDocs(collection(db, "productos"));
        const productosData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProductos(productosData);
        setError(null);
      } catch (error) {
        console.error("Error al obtener productos:", error);
        setError("Error al cargar los productos");
      } finally {
        setCargando(false);
      }
    };

    obtenerProductos();
  }, []);

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <RenderCondicional
      condicion={cargando}
      componenteSi={<Loader />}
      componenteNo={
        <div id="container">
          {productos.map((prod) => (
            <Producto {...prod} key={prod.id} />
          ))}
        </div>
      }
    />
  );
}

export default Productos;
