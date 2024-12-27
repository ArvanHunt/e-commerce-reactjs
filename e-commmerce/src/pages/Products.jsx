import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import laptop from '../assets/laptop.png'
import headphone from '../assets/headphone.png'
import shoes from '../assets/shoes.png'

const productsData = [
  { id: 1, name: "Laptop", category: "Electronics", price: 999, image: {laptop} },
  { id: 2, name: "Headphones", category: "Accessories", price: 199, image: {headphone} },
  { id: 3, name: "Shoes", category: "Fashion", price: 79, image: {shoes} },
];

function Products({ addToCart }) {
  const [filter, setFilter] = useState("");

  const filteredProducts = filter
    ? productsData.filter((product) => product.category.toLowerCase().includes(filter.toLowerCase()))
    : productsData;

  return (
    <div className="p-4">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Filter by category..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Products;
