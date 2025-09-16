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
  const [products, setProducts] = useState(productsData);
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeTab, setActiveTab] = useState("All");

  const categories = ["All", "Shoes", "Clothing", "Electronics", "Accessories"];

  const featured = productsData.slice(0, 3);

  const handleAddToCart = (product) => setCart([...cart, product]);
  const handleRemoveFromCart = (id) => setCart(cart.filter((item) => item.id !== id));

  const handleSearch = (query) => {
    const filtered = productsData.filter((p) =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );
    setProducts(activeTab === "All" ? filtered : filtered.filter(p => p.category === activeTab));
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === "All") setProducts(productsData);
    else setProducts(productsData.filter(p => p.category === tab));
  };

  return (
    <div className="app">
      <Header
        cartCount={cart.length}
        onSearch={handleSearch}
        categories={categories}
        onTabClick={handleTabClick}
        activeTab={activeTab}
      />
      <Carousel featured={featured} />
      <main>
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              onView={setSelectedProduct}
            />
          ))}
        </div>
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
        />
        <Cart cartItems={cart} onRemove={handleRemoveFromCart} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
