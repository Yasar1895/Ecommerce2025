import React, { useState } from "react";

const Carousel = ({ featured }) => {
  const [current, setCurrent] = useState(0);
  const length = featured.length;

  const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);

  if (!Array.isArray(featured) || featured.length <= 0) return null;

  return (
    <div className="carousel">
      <button className="prev" onClick={prevSlide}>❮</button>
      <button className="next" onClick={nextSlide}>❯</button>
      {featured.map((item, index) => (
        <div
          className={index === current ? "slide active" : "slide"}
          key={item.id}
        >
          {index === current && (
            <>
              <img src={item.image} alt={item.name} />
              <h2>{item.name}</h2>
              <p>${item.price.toFixed(2)}</p>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
