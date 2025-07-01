import React from "react";

function RenderCondicional({ condicion, componenteSi, componenteNo }) {
  return condicion ? componenteSi : componenteNo;
}

export default RenderCondicional;
