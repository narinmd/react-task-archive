import { UseCart } from "../hooks/UseCart";

import { Trash2 } from "lucide-react";

export default function Cart() {
  const {
    cart,
    removeFromCart,
    totalItems,
    totalPrice,
    decreaseQty,
    increaseQty,
  } = UseCart();

  return (
    <div style={{ marginTop: "20px" }}>
      <h2 className="fs-6 text-center text-info fw-bold m-3">Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="alert alert-danger text-center">Your cart is empty!</p>
      ) : (
        <>
          <div className="table-responsive-md">
            <table className="table table-light table-striped table-hover table-bordered border-secondary border-4">
              <thead className="table-light text-center">
                <tr>
                  <th>Number</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Count</th>
                  <th>Total</th>
                  <th>Delete</th>
                </tr>
              </thead>

              <tbody className="text-center">
                {cart.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>

                    <td>{item.title}</td>

                    <td>${item.price}</td>

                    <td>
                      <div className="d-flex justify-content-center align-items-center gap-3">
                        <button
                          className="btn btn-sm btn-secondary"
                          disabled={item.qty <= 1}
                          onClick={() => decreaseQty(item.id)}
                        >
                          -
                        </button>

                        <span>{item.qty}</span>

                        <button
                          className="btn btn-sm btn-secondary"
                          onClick={() => increaseQty(item.id)}
                        >
                          +
                        </button>
                      </div>
                    </td>

                    <td>${item.price * item.qty}</td>

                    <td>
                      <div className="d-flex justify-content-center">
                        <button
                          className="btn btn-danger d-flex gap-2"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Trash2 />
                          <span>Delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center fw-bold fs-6 mt-2">
            <p>Number of items: {totalItems}</p>
            <p>Total price: ${totalPrice}</p>
          </div>
        </>
      )}
    </div>
  );
}
