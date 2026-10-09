import React from "react";

export default function Button({ onSelect, children }) {
  return (
    <button onClick={onSelect} className="btn btn-dark m-1">
      {children}
    </button>
  );
}
