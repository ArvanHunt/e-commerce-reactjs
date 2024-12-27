import React, { useState } from "react";

function Payment() {
  const [orderSuccess, setOrderSuccess] = useState(false);

  function handlePayment(e) {
    e.preventDefault();
    // Simulate payment processing
    setTimeout(() => {
      setOrderSuccess(true);
    }, 1000); // Simulate a delay for processing
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Payment Method</h1>
      {!orderSuccess ? (
        <form onSubmit={handlePayment} className="space-y-4">
          <div>
            <label className="block text-sm font-bold mb-1">Cardholder Name</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-1">Card Number</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              placeholder="1234 5678 9101 1121"
              required
            />
          </div>
          <div className="flex space-x-4">
            <div>
              <label className="block text-sm font-bold mb-1">Expiry Date</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2"
                placeholder="MM/YY"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">CVV</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2"
                placeholder="123"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Pay Now
          </button>
        </form>
      ) : (
        <div className="text-center p-10 bg-green-100 border border-green-400 rounded-lg">
          <h2 className="text-2xl font-bold text-green-700">Order Successful!</h2>
          <p className="mt-2 text-green-600">Thank you for your purchase. Your order has been placed successfully.</p>
        </div>
      )}
    </div>
  );
}

export default Payment;
