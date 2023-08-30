import React from "react";
import { useState } from "react";

const Converter = () => {
    const [segundosIngresados, setSegundosIngresados] = useState(0);
    const [horas, setHoras] = useState(0);
    const [minutos, setMinutos] = useState(0);
    const [segundos, setSegundos] = useState(0);
    
    const manejarCambioDeInput = (event) => {
      const valorInput = parseInt(event.target.value);
      setSegundosIngresados(valorInput);
    
      const segundosRestantes = valorInput % 60;
      const minutosTotales = Math.floor(valorInput / 60);
      const minutosRestantes = minutosTotales % 60;
      const horasTotales = Math.floor(minutosTotales / 60);
    
      setHoras(horasTotales);
      setMinutos(minutosRestantes);
      setSegundos(segundosRestantes);
  
      console.log(`Tiempo convertido: ${horasTotales} horas, ${minutosRestantes} minutos, ${segundosRestantes} segundos`);
    };
    
    return (
      <div>
        <input
          type="number"
          value={segundosIngresados}
          onChange={manejarCambioDeInput}
          placeholder="Ingresa los segundos"
        />
        <p>
          {horas} horas, {minutos} minutos, {segundos} segundos
        </p>
      </div>
    );
  };
  
  export default Converter;
