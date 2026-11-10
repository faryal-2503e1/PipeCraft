import { FaInstagram, FaFacebook, FaPinterest } from "react-icons/fa";
import { FaEnvelope, FaPalette, FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-about">
          <Link to="/" className="footer-logo">
            <span>✿</span> PipeCraft
          </Link>

          <p>
            Bring your imagination to life with our colorful
            pipe cleaners and creative DIY craft supplies.
            Let's make something beautiful together!
          </p>

          <div className="footer-socials">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebook />
            </a>

            <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer" aria-label="Pinterest">
              <FaPinterest />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/products">Our Products</Link>
          <Link to="/tutorials">DIY Tutorials</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className="footer-links">
          <h3>Our Products</h3>
          <Link to="/products">Colorful Pipe Cleaners</Link>
          <Link to="/products">Glitter Pipe Cleaners</Link>
          <Link to="/products">Metallic Pipe Cleaners</Link>
          <Link to="/products">Jumbo Pipe Cleaners</Link>
          <Link to="/products">DIY Craft Kits</Link>
        </div>

        <div className="footer-contact">
          <h3>Get In Touch</h3>

          <p><FaEnvelope /> hello@pipecraft.com</p>
          <p><FaPalette /> Creative Craft Supplies</p>
          <p><FaHeart /> Made for Creative Minds</p>

          <Link to="/contact" className="footer-contact-btn">
            Contact Us →
          </Link>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} PipeCraft. All Rights Reserved.</p>
        <p>Made with 💜 for Creative Minds</p>
      </div>

    </footer>
  );
}

export default Footer;
