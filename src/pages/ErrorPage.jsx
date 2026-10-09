import React from "react";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigator = useNavigate();
  function handleClick() {
    navigator("/");
  }
  return (
    <div>
      <div className="container">
        <h2 className="text-center mt-2">Error!</h2>

        {/* redirect / turn to another page */}
        <div className="d-flex justify-content-center">
          <button onClick={handleClick} className="btn btn-secondary mt-3">
            Turn back
          </button>
        </div>
      </div>
    </div>
  );
}
