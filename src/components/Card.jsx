import React from "react";
import { Link } from "react-router-dom";

export default function Card({ id, title, image, desc, price }) {
  return (
    <>
      <div className="col-md-3">
        <div className="card h-100 w-100 p-3">
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ height: "250px" }}
          >
            <img
              className="card-img-top"
              style={{ width: "150px", height: "150px" }}
              src={image}
              alt={title}
            />
          </div>

          <div className="card-body">
            <div className="card-title text-center fw-bold fs-5 mb-2">
              {title}
            </div>
            <div className="card-text text-secondary fs-6 text-center mb-2">
              {desc}
            </div>
            <p className="text-success fw-bold">Price: {price}</p>
            <div className="d-flex gap-1 flex-column mt-3">
              <Link
                to={`/product/${id}/${title}`}
                className=" btn btn-outline-danger text-center w-100"
              >
                More Details ...
              </Link>
              {/* <Link className="btn btn-success text-center w-100">
                Add to Cart!
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
