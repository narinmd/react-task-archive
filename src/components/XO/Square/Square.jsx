import React from "react";
import "./Square.css";

export default function Square({ value, onSelected }) {
  return (
    <div>
      <button onClick={onSelected} className="square btn btn-dark m-1">
        {value}
      </button>
    </div>
  );
}
