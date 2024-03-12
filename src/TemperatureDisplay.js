import React, { useState } from "react";

const TemperatureDisplay = () => {
  const [temperature, setTemperature] = useState(0);

  const handleInputChange = (e) => {
    setTemperature(Number(e.target.value));
  };

  return (
    <div>
      <h2>temperature Display</h2>
      <label>
        Enter Temperature:
        <input type="number" value={temperature} onChange={handleInputChange} />
      </label>

      {temperature > 30 && <p>It's hot!</p>}
      {temperature <= 30 && temperature >= 10 && <p>Moderate temperature.</p>}
      {temperature < 10 && <p>It's cold!</p>}
    </div>
  );
};

export default TemperatureDisplay;
