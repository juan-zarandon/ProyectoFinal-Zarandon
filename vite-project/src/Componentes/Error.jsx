import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div>
      <h1>404 - Página no encontrada</h1>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
}
