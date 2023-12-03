import React, { useState } from "react";

function Button() {
  const [count, setCount] = useState(0);

  const handleInc = () => {
    setCount(count + 1);
  };

  const handleDec = () => {
    setCount(count - 1); 
  };

  return (
    <div>
      <button onClick={handleInc}>...Plus...</button>
      <span>{count}</span>
      <button onClick={handleDec}>...Minus...</button>
    </div>
  );
}

export default Button;