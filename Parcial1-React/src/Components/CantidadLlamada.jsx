import React from "react";
import { useState } from "react";

const CantidadLlamada = () => {
    const [duracionLlamada, setDuracionLlamada] = useState(0);
    const [costoTotal, setCostoTotal] = useState(0);
  
    const manejarCambioDuracion = (event) => {
      const duracion = parseInt(event.target.value);
      setDuracionLlamada(duracion);
  
      let costo = 100; 
  
      if (duracion > 3) {
        const minutosExtras = duracion - 3;
        costo += minutosExtras * 50; 
      }
  
      setCostoTotal(costo);
    };
  
    return (
      <div>
        <h2>Precio de llamadas</h2>
        <input
          type="number"
          value={duracionLlamada}
          onChange={manejarCambioDuracion}
          placeholder="Ingresa duración de la llamada"
        />
        <p>Costo total: {costoTotal} pesos</p>
      </div>
    );
  };
  
  export default CantidadLlamada;