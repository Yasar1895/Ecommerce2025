import React from "react";

const ProductCard = ({ product, onAddToCart, onView }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      <button onClick={onView}>View</button>
    </div>
  );
};

export default ProductCard;