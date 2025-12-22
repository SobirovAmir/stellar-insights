import { useParams, useNavigate } from "react-router-dom";
import "./SlidesPage.css";

const SlidesPage = () => {
  const { lectureId } = useParams();
  const navigate = useNavigate();

  return (
    <div className="slides-page">
      <div className="slides-header">
        <h1>Lecture {lectureId} Slide</h1>
        <button
          className="slides-back-button"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>

      <div className="slides-container">
        <iframe
          src={`/slides/lecture${lectureId}.pdf`}
          title={`Lecture ${lectureId} Slides`}
          className="slides-iframe"
        />
      </div>
    </div>
  );
};

export default SlidesPage;
