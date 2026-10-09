import React from "react";
import { PRODUCT_LIST } from "../lib/product";
import Card from "../components/Card";
import MoreButtons from "../components/MoreButtons";

export default function CategoryPage() {
  return (
    <div>
      <div className="container">
        <h3 className="fs-6 text-center text-info fw-bold m-3">
          Static Product Category
        </h3>
        <div className="row g-3 ">
          {PRODUCT_LIST.map((product) => (
            <Card
              key={product.id}
              {...product}
              price={product.price.toLocaleString()}
            />
          ))}
        </div>
        <div className="mt-4">
          <MoreButtons />
        </div>
      </div>
    </div>
  );
}
