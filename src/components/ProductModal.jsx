import React from "react";

const ProductModal = ({ product, onClose, onAddToCart }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p>₹{product.price}</p>
        <p>{product.description}</p>
        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ProductModal;