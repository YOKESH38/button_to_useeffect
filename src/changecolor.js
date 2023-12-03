import React, { useState } from 'react';

const ColorChange = () => {
  const [currentColor, setColor] = useState("Blue");

  const changeColor = () => {
    setColor("Red");
  };

  return (
    <div className="content">
      <div className="details">
        <p>Current Color: {currentColor}</p>
        <button onClick={changeColor}>Change Color</button>
      </div>
    </div>
  );
};

export default ColorChange;