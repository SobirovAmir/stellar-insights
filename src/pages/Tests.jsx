import { Link } from "react-router-dom";
import "./Tests.css";

const Tests = () => {
  const testFiles = [
    "lesson1.txt",
    "lesson2.txt",
    "lesson3.txt",
    "lesson4.txt",
    "lesson5.txt",
    "lesson6.txt",
    "lesson7.txt",
  ];

  return (
    <div className="tests-container">
      <h1 className="tests-title">TESTS
      </h1>

      <ul className="test-list">
        {testFiles.map((file, index) => {
          const lessonId = file.replace(".txt", "");
          return (
            <li key={index} className="test-item">
              <Link to={`/tests/${lessonId}`} className="test-link">
                Test {index + 1}
              </Link>
            </li>
          );
        })}
      </ul>

    </div>
  );
};

export default Tests;
