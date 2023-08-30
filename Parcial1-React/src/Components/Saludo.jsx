import React from "react";
import { useState } from "react";


const Saludo = () => {
    const [nombre, setNombre] = useState('');
    const [hora, setHora] = useState('');
  
    const handleNombreChange = (event) => {
      setNombre(event.target.value);
    };
  
    const handleHoraChange = (event) => {
      setHora(event.target.value);
    };
  
    const obtenerSaludoSegunHora = () => {
      const horaActual = parseInt(hora);
  
      if (horaActual >= 0 && horaActual < 12) {
        console.log(`Hora ingresada: ${horaActual}`);
        return `Buenos días, ${nombre}`;
      } else if (horaActual >= 12 && horaActual < 18) {
        console.log(`Hora ingresada: ${horaActual}`);
        return `Buenas tardes, ${nombre}`;
      } else {
        console.log(`Hora ingresada: ${horaActual}`);
        return `Buenas noches, ${nombre}`;
      }
    };
  
    return (
      <div>
        <h2>Saludo según la Hora</h2>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={handleNombreChange}
            placeholder="Ingrese su nombre"
          />
        </div>
        <div>
          <label htmlFor="hora">Hora:</label>
          <input
            type="number"
            id="hora"
            value={hora}
            onChange={handleHoraChange}
            placeholder="Ingrese la hora"
          />
        </div>
        <p>{obtenerSaludoSegunHora()}</p>
      </div>
    );
  };
  
  export default Saludo;