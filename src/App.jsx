import React, { useState } from "react";
import productsData from "./data/products";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import ProductModal from "./components/ProductModal";
import Cart from "./components/Cart";
import Carousel from "./components/Carousel";
import "./App.css";

const App = () => {
  const [products] = useState(productsData);
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", "Shoes", "Clothing", "Electronics", "Accessories"];

  // Filter products
  const filtered = products.filter((p) => {
    return (
      (category === "All" || p.category === category) &&
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const updateQty = (id, qty) => {
    if (qty < 1) return;
    setCart(cart.map((i) => (i.id === id ? { ...i, qty } : i)));
  };

  return (
    <div className="App">
      <Header cartCount={cart.length} onSearch={setSearch} />

      {/* Carousel */}
      <Carousel items={products.slice(0, 3)} />

      {/* Category Tabs */}
      <div className="tabs">
        {categories.map((c) => (
          <button
            key={c}
            className={c === category ? "active" : ""}
            onClick={() => setCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Products */}
      <div className="grid">
        {filtered.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            onAddToCart={addToCart}
            onView={() => setSelectedProduct(p)}
          />
        ))}
      </div>

      {/* Cart */}
      <Cart
        cart={cart}
        removeFromCart={removeFromCart}
        updateQty={updateQty}
      />

      {/* Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={addToCart}
        />
      )}

      <Footer />
    </div>
  );
};

export default App;