import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">

      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">Astronomical Image Processing</h1>
        <p className="hero-subtitle">

          Explore techniques for processing, analyzing, and extracting scientific data from astronomical images.
        </p>
      </section>

      {/* Navigation Section */}
      <nav className="nav-section">
        <Link to="/materials" className="nav-card">
          <h2>Lectures</h2>
          <p>
            Detailed materials on astronomical image processing, analysis methods, and data interpretation.
          </p>
        </Link>

        <Link to="/tests" className="nav-card">
          <h2>Tests</h2>
          <p>
            Interactive quizzes to assess your understanding of astronomical image processing concepts and techniques.
          </p>
        </Link>

        <Link to="/resources" className="nav-card">
          <h2>Resources</h2>
          <p>
            Explore additional materials, datasets, and references related to astronomical image processing.
          </p>

        </Link>
      </nav>

      {/* Information Section */}
      <section className="info-section">
        <div className="info-content">
          <h2>Importance of Astronomical Image Processing</h2>
          <p>
            Astronomical image processing enables the analysis of celestial objects, extraction of scientific data,
            and a deeper understanding of the structure and evolution of the Universe.
          </p>

        </div>

        <img
          src="/hero-content.jpg"
          alt="Astronomical image processing"
          className="info-image"
        />
      </section>

    </div>
  );
};

export default Home;
