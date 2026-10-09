import React, { useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h2>Parent:{counter}</h2>

      <Child counter={counter} setCounter={setCounter} />
    </div>
  );
}
