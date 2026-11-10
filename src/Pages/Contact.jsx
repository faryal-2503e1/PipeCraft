import { FaEnvelope, FaPalette, FaHeart } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-page">

      {/* Contact Hero Banner */}
      <section className="contact-hero">

        <div className="contact-hero-content">
          <span>WE'D LOVE TO HEAR FROM YOU</span>

          <h1>
            Let's Talk <span>Creativity!</span>
          </h1>

          <p>
            Have a question about our products or need help with your
            next craft project? Get in touch with us.
          </p>
        </div>

        <div className="contact-hero-art">
          <img
            src="/images/contact-banner.png"
            alt="Colorful handmade pipe cleaner flowers and crafts"
          />
        </div>

      </section>

      {/* Contact Content */}
      <section className="contact-content">

        <div className="contact-info">
          <span className="contact-label">GET IN TOUCH</span>

          <h2>Let's Create Something Beautiful Together.</h2>

          <p>
            We're always happy to help you discover new ideas
            and find the perfect craft supplies.
          </p>

          <div className="contact-detail">
            <span><FaEnvelope /></span>
            <div>
              <h4>Email Us</h4>
              <p>Send us your questions and inquiries.</p>
            </div>
          </div>

          <div className="contact-detail">
            <span><FaPalette /></span>
            <div>
              <h4>Craft Support</h4>
              <p>Need help choosing your craft supplies?</p>
            </div>
          </div>

          <div className="contact-detail">
            <span><FaHeart /></span>
            <div>
              <h4>Stay Creative</h4>
              <p>Share your creative ideas with PipeCraft.</p>
            </div>
          </div>
        </div>

        <div className="contact-form-box">
          <h2>Send Us a Message</h2>
          <p>Fill out the form below to get in touch.</p>

          <form onSubmit={(e) => e.preventDefault()}>
            <label>Your Name</label>
            <input type="text" placeholder="Enter your name" required />

            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" required />

            <label>Subject</label>
            <input type="text" placeholder="What is it about?" required />

            <label>Your Message</label>
            <textarea rows="5" placeholder="Write your message..." required />

            <button type="submit">Send Message →</button>
          </form>
        </div>

      </section>

    </div>
  );
}

export default Contact;
