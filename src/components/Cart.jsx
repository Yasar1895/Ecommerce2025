import React from "react";

const Cart = ({ cart, removeFromCart, updateQty }) => {
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <div className="cart">
      <h3>🛒 Cart</h3>
      {cart.length === 0 ? <p>No items in cart</p> : null}
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <span>{item.name}</span>
          <input
            type="number"
            value={item.qty}
            onChange={(e) => updateQty(item.id, parseInt(e.target.value))}
          />
          <span>₹{item.price * item.qty}</span>
          <button onClick={() => removeFromCart(item.id)}>❌</button>
        </div>
      ))}
      <div className="cart-total">Total: ₹{total}</div>
    </div>
  );
};

export default Cart;