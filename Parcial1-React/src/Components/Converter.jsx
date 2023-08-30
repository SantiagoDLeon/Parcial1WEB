import React from "react";
import { useState } from "react";

const Converter = () => {
    const [inputSeconds, setInputSeconds] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
  
    const handleInputChange = (event) => {
      const inputValue = parseInt(event.target.value);
      setInputSeconds(inputValue);
  
      const remainingSeconds = inputValue % 60;
      const totalMinutes = Math.floor(inputValue / 60);
      const remainingMinutes = totalMinutes % 60;
      const totalHours = Math.floor(totalMinutes / 60);
  
      setHours(totalHours);
      setMinutes(remainingMinutes);
      setSeconds(remainingSeconds);
      console.log(`Converted time: ${totalHours} hours, ${remainingMinutes} minutes, ${remainingSeconds} seconds`);
    };
  
    return (
      <div>
        <h2>Seconds Converter</h2>
        <input
          type="number"
          value={inputSeconds}
          onChange={handleInputChange}
          placeholder="Enter seconds"
        />
        <p>
          {hours} hours, {minutes} minutes, {seconds} seconds
        </p>
      </div>
    );
  };
  
  export default Converter;
