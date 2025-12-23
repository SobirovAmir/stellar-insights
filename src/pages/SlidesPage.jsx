import { useParams, useNavigate } from "react-router-dom";
import lecturesConfig from "../data/lecturesConfig";
import "./SlidesPage.css";

const SlidesPage = () => {
  const { lectureId } = useParams();
  const navigate = useNavigate();
  const lecture = lecturesConfig.find((lec) => lec.id === Number(lectureId));

  if (!lecture) return <p>Lecture not found</p>;

  return (
    <div className="slides-page">
      <button className="slides-back-button" onClick={() => navigate(-1)}>
         Back
      </button>

      <div className="slides-header">
        <h1>{lecture.title}</h1>
      </div>

      {/* Главный PDF */}
      {lecture.slides ? (
        <div className="slides-container">
          <h2 style={{ color: "#f0a500", marginBottom: "15px" }}>Presentation</h2>
          <a
            href={lecture.slides}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#fff",
              textDecoration: "underline",
              fontSize: "1.2rem",
            }}
          >
           Presentation
          </a>
        </div>
      ) : (
        <p style={{ color: "#f0a500", marginTop: "30px" }}>
          No presentation available for this lecture.
        </p>
      )}

      {/* References */}
      {lecture.references?.length > 0 && (
        <div className="slides-container references-container" style={{ marginTop: "30px" }}>
          <h2 style={{ color: "#f0a500", marginBottom: "15px" }}>References</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {lecture.references.map((ref, idx) => (
              <li key={idx} style={{ marginBottom: "10px" }}>
                <a
                  href={ref}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#fff", textDecoration: "underline" }}
                >
                  Reference {idx + 1}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SlidesPage;
