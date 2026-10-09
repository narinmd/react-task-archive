import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { PRODUCT_LIST } from "../lib/product";

export default function ProductPageAPI() {
  const { productId } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [productId]);

  if (loading) {
    return <div className="alert alert-info m-2 text-center">Loading...</div>;
  }

  if (!product) {
    return <div className="alert alert-danger m-2">Not found!</div>;
  }

  return (
    <div className="container my-5">
      <div className="row justify-content-center align-items-center g-2">
        <div className="col-md-6 text-center">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid rounded w-50"
          />
        </div>

        <div className="col-md-6  p-4">
          <h3 className="text-dark fw-bold mb-3 fs-5">{product.title}</h3>

          <h2 className="text-success fs-5 fw-bold mt-5">
            Price: {product.price.toLocaleString()} Toman
          </h2>
          {/* <div className="d-flex">
            <button className="btn btn-danger mt-1 " style={{ width: "150px" }}>
              Buy Now!
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
