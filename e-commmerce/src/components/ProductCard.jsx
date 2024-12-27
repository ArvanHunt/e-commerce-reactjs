import React from "react";

function ProductCard({ product, addToCart }) {
  return (
    <div className="border rounded p-4 shadow">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
      <h2 className="text-lg font-bold mt-2">{product.name}</h2>
      <p className="text-gray-500">{product.category}</p>
      <p className="text-blue-600 font-semibold mt-2">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
