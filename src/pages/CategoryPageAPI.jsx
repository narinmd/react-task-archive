import React, { useEffect, useState } from "react";
import CardAPI from "../components/CardAPI/CardAPI";
import { Link } from "react-router-dom";
import { UseCart } from "../hooks/UseCart";

import { ShoppingCart } from "lucide-react";

export default function CategoryPageAPI() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [updated, setIsUpdated] = useState(true);
  const [loading, setIsLoading] = useState(false);

  const { totalItems } = UseCart();

  const endpoint = "https://fakestoreapi.com/products";
  console.log(endpoint);

  useEffect(() => {
    async function fetchDataByAsync() {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      fetch(endpoint)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setProducts(data);
        })
        .catch((error) => setError(error));
      setIsLoading(false);
    }
    fetchDataByAsync();
  }, [updated]);

  return (
    <div>
      <h3 className="fs-6 text-center text-info fw-bold m-3">
        Product Category by API
      </h3>
      <Link
        to="/cart"
        className="btn btn-info position-relative text-decoration-none mb-3"
      >
        <div className="d-flex align-items-center justify-content-center gap-2 ">
          <ShoppingCart />
          <span>Cart</span>
        </div>

        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
          {totalItems}
        </span>
      </Link>
      <div>
        {loading ? (
          <div className="d-flex justify-content-center gap-2 align-items-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="text-secondary text-center mt-2 fs-5">
              Loading to show data...
            </div>
          </div>
        ) : error ? (
          <div className="alert alert-warning text-center mt-2 fs-5">
            Can not connect to the server! Check your Internet.
          </div>
        ) : (
          <div className="container">
            <div className="row g-3">
              {products.map((p) => (
                <CardAPI key={p.id} {...p} price={p.price.toLocaleString()} />
              ))}
            </div>
          </div>
        )}
        <div className=" d-flex justify-content-center">
          <button
            disabled={loading}
            className="btn btn-outline-info mt-3"
            onClick={() => setIsUpdated(!updated)}
          >
            Update data
          </button>
        </div>
      </div>
    </div>
  );
}
