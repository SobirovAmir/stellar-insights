import { Link } from "react-router-dom";
import "./Resources.css";

const Resources = () => {
  return (
    <div className="resources-container">
      {/* Заголовок секции */}
      <section className="additional-section">
        <h1 className="resources-title">Resources</h1>
        <p className="resources-intro">
          Explore useful materials, tools, and links to enhance your knowledge 
          of astronomical image processing and gain deeper insights into the cosmos.
        </p>
      </section>

      {/* Список ресурсов */}
      <div className="resources-list">
        <ul>
          <li className="resource-item">
            <Link to="/resources/glossary" className="resource-link">
              Glossary
            </Link>
          </li>
          <li className="resource-item">
            <Link to="/resources/videos" className="resource-link">
              Video Tutorials
            </Link>
          </li>
          <li className="resource-item">
            <Link to="/resources/tools" className="resource-link">
              Tools & Links
            </Link>
          </li>
        </ul>
      </div>

      {/* Объяснение ценности ресурсов */}
      <section className="additional-section">
        <h2>Why Use These Resources?</h2>
        <p>
          These materials provide comprehensive knowledge and practical guidance.
          Whether you are a beginner or an experienced researcher, you will find 
          valuable information to enhance your skills in astronomical image processing.
        </p>
      </section>
    </div>
  );
};

export default Resources;
