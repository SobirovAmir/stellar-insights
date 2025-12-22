import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import mammoth from "mammoth";
import "./Lesson.css";

const Lesson = () => {
  const { lectureId } = useParams(); // ✅ правильное имя
  const navigate = useNavigate();

  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadLesson = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `/materials/lecture${lectureId}.docx`
        );

        if (!response.ok) {
          throw new Error("Lecture file not found");
        }

        const arrayBuffer = await response.arrayBuffer();
        const result = await mammoth.convertToHtml({ arrayBuffer });

        setContent(result.value);
      } catch (err) {
        console.error(err);
        setError("Unable to load lecture content.");
      } finally {
        setLoading(false);
      }
    };

    loadLesson();
  }, [lectureId]);

  return (
    <div className="lesson-page-container">
      <button
        onClick={() => navigate(-1)}
        className="back-button-lesson"
      >
        ← Back
      </button>

      {loading && <div className="lesson-loader">Loading...</div>}

      {error && <div className="lesson-error">{error}</div>}

      {!loading && !error && (
        <div
          className="lesson-text-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
    </div>
  );
};

export default Lesson;
