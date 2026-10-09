import React from "react";
import { useParams } from "react-router-dom";
import { PRODUCT_LIST } from "../lib/product";

export default function ProductPage() {
  const params = useParams();
  const { productId } = useParams();
  const product = PRODUCT_LIST.find((product) => product.id == productId);

  if (!product) return <div className="alert alert-danger">Not found!</div>;

  return (
    <div className="container my-5">
      <div className="row justify-content-center align-items-center g-2">
        <div className="col-md-6 text-center">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid rounded"
          />
        </div>

        <div className="col-md-6 border border-1 rounded-2 p-4">
          <h3 className="text-dark fw-bold mb-3 fs-5">{product.title}</h3>

          <p className="text-muted mb-2 ">
            Product Information: {product.desc}
          </p>

          <div className="d-flex flex-column align-items-end g-1">
            <p
              className=" bg-dark text-white p-2 rounded-2 d-flex align-items-center justify-content-center"
              style={{ width: "150px" }}
            >
              Category: {product.category}
            </p>
            <p
              className=" bg-dark text-white p-2 rounded-2 d-flex align-items-center justify-content-center"
              style={{ width: "150px" }}
            >
              Brand: {product.brand}
            </p>
          </div>

          <h2 className="text-success fs-5 fw-bold mt-5 text-center">
            Price: {product.price.toLocaleString()} Toman
          </h2>
          {/* <div className="d-flex justify-content-center">
            <button className="btn btn-danger mt-1 " style={{ width: "150px" }}>
              Buy Now!
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
