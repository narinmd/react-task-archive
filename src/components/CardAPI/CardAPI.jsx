import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UseCart } from "../../hooks/UseCart";
import styles from "./CardAPI.module.css";

export default function CardAPI({ id, title, image, price }) {
  const { addToCart } = UseCart();
  return (
    <>
      <div className="col-md-3">
        <div className="card w-100 p-3">
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
            <div
              className={`card-title text-center fw-bold mb-2 h-50  ${styles.titleClamp}`}
              style={{ fontSize: "18px" }}
            >
              {title}
            </div>
            <p className="text-success fw-bold">Price: {price}</p>
            <div className="d-flex gap-1 flex-column mt-3">
              <Link
                to={`/product-api/${id}/${title}`}
                className=" btn btn-outline-danger text-center w-100"
              >
                More Details ...
              </Link>
              <Link
                className="btn btn-success text-center w-100"
                onClick={() => addToCart({ id, title, image, price })}
              >
                Add to Cart!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
