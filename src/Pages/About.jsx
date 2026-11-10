
import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import { FaHeart, FaLightbulb } from 'react-icons/fa';

function About() {

  const values = [
    {
      image: '/images/colorful-rainbow.jpg',
      title: 'Colorful Creativity',
      desc: 'A beautiful range of vibrant colors to make every craft special.'
    },
    {
      image: '/images/premium-quality.jpg',
      title: 'Premium Quality',
      desc: 'Soft, flexible and durable pipe cleaners for creative projects.'
    },
    {
      image: '/images/made-with-love.jpg',
      title: 'Made With Love',
      desc: 'We believe every handmade creation deserves special attention.'
    }
  ];

  return (
    <main className="about-page">

      {/* About Hero */}
      <section className="about-hero">

        <div className="about-hero-content">

          <span className="about-tag">
            <FaHeart /> Get to Know Us
          </span>

          <h1>
            Creativity Begins
            With <span>PipeCraft!</span>
          </h1>

          <p>
            We bring imagination to life with colorful,
            soft and flexible pipe cleaners. From beautiful
            flowers to adorable handmade creations,
            every little idea deserves to bloom.
          </p>

          <Link to="/products" className="about-btn">
            Explore Our Products →
          </Link>

        </div>

        <div className="about-hero-art">

          <img
            src="/images/about-crafts.jpg"
            alt="Beautiful handmade pipe cleaner flowers and crafts"
            className="about-hero-image"
          />

          <div className="about-art-label">
            Create Something Beautiful!   <FaHeart />
          </div>

        </div>

      </section>

      {/* Our Story */}
      <section className="our-story">

        <div className="story-image">

          <img
            src="/images/story-crafts.jpg"
            alt="Colorful handmade pipe cleaner creations"
            className="story-photo"
          />

        </div>

        <div className="story-content">

          <span className="section-label">
            OUR STORY
          </span>

          <h2>
            A Little Creativity,
            <span> A Lot of Magic!</span>
          </h2>

          <p>
            PipeCraft is all about creativity, imagination
            and the joy of making something with your own
            hands.
          </p>

          <p>
            We offer colorful pipe cleaners that help
            children, craft lovers and DIY enthusiasts
            turn simple materials into beautiful handmade
            creations.
          </p>

          <p>
            Whether you are making flowers, animals,
            decorations or unique gifts, we are here
            to inspire your next creative adventure.
          </p>

          <Link to="/tutorials" className="story-link">
            Discover Creative Ideas →
          </Link>

        </div>

      </section>

      {/* Our Values */}
      <section className="our-values">

        <div className="about-heading">

          <span className="section-label">
            WHY PIPECRAFT?
          </span>

          <h2>
            What Makes Us <span>Special?</span>
          </h2>

          <p>
            Everything you need to make creativity colorful.
          </p>

        </div>

        <div className="values-grid">

          {values.map((item, index) => (

            <div className="value-card" key={index}>

              <div className="value-image">
                <img
                  src={item.image}
                  alt={item.title}
                />
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

            </div>

          ))}

        </div>

      </section>

      {/* Mission */}
      <section className="our-mission">

        <div className="mission-content">

          <div className="mission-text">

            <span>
              <FaLightbulb /> OUR MISSION <FaLightbulb />
            </span>

            <h2>Inspire. Create. Enjoy.</h2>

            <p>
              Our mission is to make crafting fun, accessible
              and inspiring for everyone. We want to help
              people discover the artist within themselves,
              one colorful pipe cleaner at a time.
            </p>

            <Link to="/products" className="mission-btn">
              Start Your Creative Journey →
            </Link>

          </div>

          <div className="mission-image">
            <img
              src="/images/mission-crafts.jpg"
              alt="Colorful handmade pipe cleaner flowers and animals"
            />
          </div>

        </div>

      </section>

    </main>
  );
}

export default About;
