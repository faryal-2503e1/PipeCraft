
import './Tutorials.css';

const tutorials = [
  {
    number: '01',
    image: '/images/tutorial-flowers.jpg',
    title: 'Pipe Cleaner Flowers',
    level: 'Beginner',
    time: '15 Minutes',
    description: 'Create beautiful colorful flowers using soft pipe cleaners.',
    steps: [
      'Choose 3 to 4 colorful pipe cleaners.',
      'Fold them into small flower petals.',
      'Twist the center to hold the petals together.',
      'Attach a green pipe cleaner as the stem.'
    ]
  },
  {
    number: '02',
    image: '/images/tutorial-butterfly.jpg',
    title: 'Cute Butterfly',
    level: 'Beginner',
    time: '10 Minutes',
    description: 'Make an adorable butterfly with colorful wings.',
    steps: [
      'Take two pipe cleaners for the wings.',
      'Shape each one into a butterfly wing.',
      'Twist another piece to make the body.',
      'Add small antennae to complete your butterfly.'
    ]
  },
  {
    number: '03',
    image: '/images/tutorial-heart.jpg',
    title: 'Heart Shape Craft',
    level: 'Easy',
    time: '5 Minutes',
    description: 'Create a lovely heart shape for gifts and decorations.',
    steps: [
      'Take one red or pink pipe cleaner.',
      'Bend it into a heart shape.',
      'Twist both ends together.',
      'Adjust the curves to make a perfect heart.'
    ]
  },
  {
    number: '04',
    image: '/images/tutorial-animal.jpg',
    title: 'Cute Animal Craft',
    level: 'Intermediate',
    time: '20 Minutes',
    description: 'Make a cute little animal using soft craft stems.',
    steps: [
      'Choose brown or your favorite color.',
      'Create a round shape for the head.',
      'Make ears, legs and arms.',
      'Join all pieces and add facial details.'
    ]
  }
];

function Tutorials() {
  return (
    <div className="tutorials-page">


      <section className="tutorial-hero">
        <div className="tutorial-hero-content">
          <span className="tutorial-tag">LEARN • CREATE • ENJOY</span>

          <h1>
            Let's Make Something <span>Creative!</span>
          </h1>

          <p>
            Explore fun and easy pipe cleaner tutorials.
            Turn simple craft stems into beautiful creations.
          </p>
        </div>

        <div className="tutorial-hero-art">
          <img
            src="/images/tutorial-banner.png"
            alt="Beautiful handmade pipe cleaner crafts"
          />
        </div>
      </section>


      <section className="tutorial-content">
        <div className="tutorial-heading">
          <span>OUR DIY COLLECTION</span>
          <h2>Explore Tutorials</h2>
          <p>Choose your favorite project and start creating!</p>
        </div>

        <div className="tutorial-grid">
          {tutorials.map((item) => (
            <div className="tutorial-card" key={item.number}>

              <div className="tutorial-image">
                <img src={item.image} alt={item.title} />
                <small>{item.number}</small>
              </div>

              <div className="tutorial-info">
                <div className="tutorial-meta">
                  <span>{item.level}</span>
                  <span>{item.time}</span>
                </div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <details>
                  <summary>View Tutorial Steps</summary>
                  <ol>
                    {item.steps.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                </details>
              </div>

            </div>
          ))}
        </div>
      </section>

      <section className="tutorial-cta">
        <h2>Your Creativity Starts Here!</h2>
        <p>Get your favorite pipe cleaners and bring your ideas to life.</p>
        <a href="/products">Explore Our Products</a>
      </section>

    </div>
  );
}

export default Tutorials;
