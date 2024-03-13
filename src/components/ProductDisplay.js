import React from "react";
import { useNavigate } from "react-router-dom";

// Define the ProductDisplay component
const ProductDisplay = ({ product, onAddToCart }) => {
  let navigate = useNavigate();

  function handleClick() {
    navigate(`/products/${product.id}`);
  }

  return (
    <div className="product">
      <img
        src={`${process.env.PUBLIC_URL}/assets/${product.image}`}
        alt={product.name}
        style={{ maxHeight: "200px" }}
      />
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <button onClick={onAddToCart}>Add to Cart</button>
      <button onClick={handleClick}>View Details</button>
    </div>
  );
};

export default ProductDisplay;
