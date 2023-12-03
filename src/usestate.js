import React from "react";
import { useState } from "react";

function Useeff() {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState("Initial Message");

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Change Count</button>
      <p>Count value is: {count}</p>
      <button onClick={() => setMsg("Message Updated on click Event")}>
        Updated Message
      </button>
    </div>
  );
}

export default Useeff;