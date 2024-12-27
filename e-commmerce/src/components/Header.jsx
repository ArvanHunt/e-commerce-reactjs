import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-blue-950 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Link the title to the Products page */}
        <Link to="/products" className="text-2xl font-bold hover:underline">
          E-Commerce App
        </Link>
        <div className="flex space-x-4">
          {/* <Link to="/" className="hover:underline">
            Home
          </Link> */}
          <Link to="/products" className="hover:underline">
            Products
          </Link>
          <Link to="/cart" className="hover:underline">
            Cart
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
