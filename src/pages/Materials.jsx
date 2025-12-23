import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import lecturesConfig from "../data/lecturesConfig";
import "./Materials.css";

const Materials = () => {
  const [activeId, setActiveId] = useState(1);
  const refs = useRef([]);

  const toggleLecture = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    lecturesConfig.forEach((lecture, index) => {
      const el = refs.current[index];
      if (!el) return;

      if (activeId === lecture.id) {
        el.style.height = el.scrollHeight + "px";
      } else {
        el.style.height = "0px";
      }
    });
  }, [activeId]);

  return (
    <div className="materials-container">
      <h1 className="title">Lectures</h1>

      <div className="lessons-accordion">
        {lecturesConfig.map((lecture, index) => (
          <div key={lecture.id} className="lesson-item">
            {/* HEADER */}
            <div
              className="lesson-header"
              onClick={() => toggleLecture(lecture.id)}
            >
              <h2>Lecture {lecture.id}</h2>
              <h3>{lecture.title}</h3>
              <span className={`arrow ${activeId === lecture.id ? "open" : ""}`}></span>
            </div>

            {/* CONTENT */}
            <div
              ref={(el) => (refs.current[index] = el)}
              className="lesson-content"
            >
              <div className="lecture-actions">
                {lecture.theory && (
                  <Link to={`/lecture/${lecture.id}`}>Theory</Link>
                )}

                {/* Показываем кнопку Presentations только если есть slides */}
                {lecture.slides && (
                  <Link to={`/lecture/${lecture.id}/presentation`}>
                    Presentations
                  </Link>
                )}

                {!lecture.slides && lecture.references && lecture.references.length > 0 && (
                  <Link to={`/lecture/${lecture.id}/presentation`}>
                    Presentation
                  </Link>
                )}
                {/* Видео */}
                {lecture.video && (
                  <Link to={`/lecture/${lecture.id}/video`}>Video</Link>
                )}

                {/* Тест */}
                {lecture.test && (
                  <Link to={`/lecture/${lecture.id}/test`}>Test</Link>
                )}

                {/* Если slides нет, но есть references — создаем отдельную ссылку на презентацию */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Materials;
