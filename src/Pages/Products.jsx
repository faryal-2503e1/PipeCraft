
import React from 'react';
import './Products.css';
import products from '../Data/data';
import { Link } from 'react-router-dom';
import {
  FaGem,
  FaPalette,
  FaCut,
  FaHeart
} from 'react-icons/fa';

function Products() {

  return (
    <main className="products-page">

      {/* Products Hero */}
      <section className="products-hero">

        <div className="products-hero-content">

          <span className="products-tag1">
            <FaPalette /> Explore Our Collection
          </span>

          <h1>
            Color Your World With
            <span> Creativity!</span>
          </h1>

          <p>
            Discover our beautiful collection of colorful,
            soft and flexible pipe cleaners. Find everything
            you need to turn your creative ideas into reality.
          </p>

          <Link to="/contact" className="products-hero-btn">
            Order Your Favorites →
          </Link>

        </div>

        <div className="products-hero-art">
          <img
            src="/images/products-banner.png"
            alt="Colorful handmade pipe cleaner crafts"
            className="products-banner-image"
          />

          <span>Make Something Magical!</span>
        </div>

      </section>

      {/* Products Section */}
      <section className="product-categories">

        <div className="products-heading">
          <span>FIND YOUR FAVORITES</span>
          <h2>Explore Our <b>Products</b></h2>
          <p>
            Everything you need for your next creative adventure.
          </p>
        </div>

        <div className="product-grid">

          {products.map((product) => (

            <div className="product-card" key={product.id}>

              {/* Product Image */}
              <div className="product-image">

                <span className="product-category">
                  {product.category}
                </span>

                <img
                  src={product.image}
                  alt={product.name}
                  className="product-photo"
                />

              </div>

              {/* Product Information */}
              <div className="product-info">

                <span className="product-colors">
                  {product.colors}
                </span>

                <div className="product-price-row">

                  <span className="product-price">
                    Rs. {product.price}
                  </span>

                  <span className="product-stock">
                    {product.availability}
                  </span>

                </div>

                <h3>{product.name}</h3>

                <p>{product.desc}</p>

                <Link
                  to="/product-details"
                  state={product}
                  className="product-btn"
                >
                  Details
                </Link>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* Why Choose Our Products */}
      <section className="product-quality">

        <div className="quality-content">

          <span>WHY PIPECRAFT PRODUCTS?</span>

          <h2>
            Made for Your <b>Imagination!</b>
          </h2>

          <p>
            Our craft collection is designed to make every
            project more colorful, enjoyable and creative.
          </p>

        </div>

        <div className="quality-grid">

          <div className="quality-item">
            <span><FaGem /></span>
            <h3>Soft & Flexible</h3>
            <p>Easy to bend, twist and shape.</p>
          </div>

          <div className="quality-item">
            <span><FaPalette /></span>
            <h3>Beautiful Colors</h3>
            <p>Explore a world of vibrant shades.</p>
          </div>

          <div className="quality-item">
            <span><FaCut /></span>
            <h3>Easy to Create</h3>
            <p>Perfect for DIY and handmade crafts.</p>
          </div>

        </div>

      </section>

      {/* Bottom CTA */}
      <section className="products-cta">

        <span><FaHeart /> LET'S GET CREATIVE</span>

        <h2>Ready to Start Your Next Project?</h2>

        <p>
          Find your favorite craft supplies and bring
          your imagination to life!
        </p>

        <Link to="/contact">
          Contact Us Today →
        </Link>

      </section>

    </main>
  );
}

export default Products;
