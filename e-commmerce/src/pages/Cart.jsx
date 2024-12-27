import React from "react";
import { useNavigate } from "react-router-dom";

function Cart({ cart, removeFromCart, clearCart }) {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center border-b py-2"
              >
                <div>
                  <p className="font-bold">{item.name}</p>
                  <p className="text-gray-500">${item.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(index)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4 space-x-4">
            <button
              onClick={clearCart}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Delete All
            </button>
            <button
              onClick={() => navigate("/payment")}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Buy Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
