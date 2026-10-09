import React, { useEffect, useState } from "react";

export default function GetLocation() {
  const [location, setLocation] = useState("");

  const [isUpdated, setIsUpdated] = useState(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude, position.coords.longitude);
      setLocation(` ${position.coords.latitude}, ${position.coords.longitude}`);
    });

    // return () => {};
  }, [isUpdated]);

  return (
    <div>
      <div className="container">
        <div className="d-flex justify-content-between mt-3">
          <h3 className="fs-5">Your Location: {location}</h3>
          <button
            className="btn btn-success"
            onClick={() => setIsUpdated(!isUpdated)}
          >
            Update Location!
          </button>
        </div>
      </div>
    </div>
  );
}
