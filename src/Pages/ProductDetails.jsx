import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import "./ProductDetails.css";

const ProductDetails = () => {
  const [add, setnum] = useState(1);
  const location = useLocation();
  const product = location.state;

  const increment = () => {
    setnum(() => add + 1);
  }

  const decrement = () => {
    setnum(() => Math.max(1, add - 1));
  }

  return (
    <>
      <div className="product-details">

        <div className="details-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="details-info">

          <p className="details-colors">{product.colors}</p>

          <h5 className="details-price">
            Rs. {product.price}
          </h5>

          <h1>{product.name}</h1>

          <p className="details-description">
            {product.desc}
          </p>

          <div className="quantity-section">

            <h3>Quantity</h3>

            <div className="quantity-controls">
              <button onClick={decrement}>-</button>

              <span className="quantity-number">{add}</span>

              <button onClick={increment}>+</button>
            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default ProductDetails;