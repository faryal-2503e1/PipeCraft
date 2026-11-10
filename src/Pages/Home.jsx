import { FaGem, FaPalette, FaInfinity, FaTruck ,FaHeart,FaLightbulb} from "react-icons/fa";
import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {

  const features = [
    { icon: FaGem, title: 'High Quality', desc: 'Soft & Durable' },
    { icon: FaPalette, title: 'Vibrant Colors', desc: 'Bring Ideas to Life' },
    { icon: FaInfinity, title: 'Endless Creativity', desc: 'Create Without Limits' },
    { icon: FaTruck, title: 'Fast Delivery', desc: 'Across Pakistan' }
  ];

  const creations = [
    {
      image: '/images/colorful-flowers.jpg',
      title: 'Colorful Flowers',
      desc: 'Beautiful handmade flowers'
    },
    {
      image: '/images/cute-animals.jpg',
      title: 'Cute Animals',
      desc: 'Adorable creative characters'
    },
    {
      image: '/images/rainbow-crafts.jpg',
      title: 'Rainbow Crafts',
      desc: 'Bright and colorful designs'
    },
    {
      image: '/images/flower-pots.jpg',
      title: 'Flower Pots',
      desc: 'Decorate your favorite space'
    },
    {
      image: '/images/butterflies.jpg',
      title: 'Butterflies',
      desc: 'Make your crafts fly'
    }
  ];

  return (
    <main>

      {/* Hero Section */}
      <section className="hero">

        <div className="hero-content">

          <span className="hero-tag">
            <FaLightbulb/> Get Creative. Get Crafty <FaLightbulb/>
          </span>

          <h1>
            Premium Pipe Cleaners
            for Endless <span>Creativity</span>
          </h1>

          <p>
            Soft, colorful and versatile pipe cleaners to bring
            your ideas to life. Perfect for kids, crafters
            and DIY lovers!
          </p>

          <div className="hero-buttons">
            <Link to="/products" className="shop-btn">
              Explore Products →
            </Link>

            <Link to="/about" className="learn-btn">
              Learn More
            </Link>
          </div>

        </div>

        <div className="hero-art">

          <img
            src="/images/home-crafts.png"
            alt="Handmade pipe cleaner crafts"
            className="hero-craft-image"
          />

          <div className="craft-label">
            Made With Love <FaHeart/>
          </div>

        </div>

      </section>

      {/* Features */}
      <section className="features">

        {features.map((item, index) => (
          <div className="feature-item" key={index}>

            <span className="feature-icon">
              <item.icon />
            </span>

            <div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>

          </div>
        ))}

      </section>

      {/* Popular Creations */}
      <section className="creations">

        <div className="section-heading">

          <span>Our Creative World</span>

          <h2>
            Our Popular <span>Creations</span>
          </h2>

          <p>
            Explore amazing ideas made with pipe cleaners.
          </p>

        </div>

        <div className="creation-grid">

          {creations.map((item, index) => (

            <div className="creation-card" key={index}>

              <div className="creation-icon">
                <img
                  src={item.image}
                  alt={item.title}
                  className="creation-photo"
                />
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

              <Link to="/products">
                Explore More →
              </Link>

            </div>

          ))}

        </div>

      </section>

      {/* Call To Action */}
      <section className="craft-banner">

        <h2>Let Your Imagination Bloom!</h2>

        <p>
          Create beautiful things with colorful pipe cleaners.
          Your next masterpiece starts here!
        </p>

        <Link to="/products">
          Start Creating →
        </Link>

      </section>

    </main>
  );
}

export default Home;
