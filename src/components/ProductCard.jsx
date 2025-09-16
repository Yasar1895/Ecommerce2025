import React from "react";

const ProductCard = ({ product, onAddToCart, onView }) => {
  return (
    <div className={`product-card ${product.category.toLowerCase()}`}>
      <img src={product.image} alt={product.name} onClick={() => onView(product)} />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
