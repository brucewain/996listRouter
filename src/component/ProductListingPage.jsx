import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import React from 'react';
import inventory from "/assets/inventory.json";

export default function ProductListingPage() {
  const location = useLocation();
  const { model } = queryString.parse(location.search);

  // Filter products based on the selected car brand
  const filteredProducts = inventory.filter((product) => product.model === model);

  return (
    <div>
      <h2>{model} Products</h2>
      {/* Render the filtered product listing */}
      {filteredProducts.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}

