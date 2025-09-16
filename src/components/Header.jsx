import React from "react";

const Header = ({ cartCount, onSearch, onFilter, categories, onTabClick, activeTab }) => {
  return (
    <header className="header">
      <h1>Colorful E-Commerce</h1>
      <div className="header-actions">
        <input
          type="text"
          placeholder="Search products..."
          onChange={(e) => onSearch(e.target.value)}
        />
        <div className="tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={activeTab === cat ? "active-tab" : ""}
              onClick={() => onTabClick(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="cart">
          Cart: <strong>{cartCount}</strong>
        </div>
      </div>
    </header>
  );
};

export default Header;
