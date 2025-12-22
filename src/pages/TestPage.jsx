import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './TestPage.css';

// Shuffle array
const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

// Parse test file
const parseTestFile = (text) => {
  return text
    .trim()
    .split('\n?') 
    .filter(Boolean)
    .map((block) => {
      const lines = block.split('\n');
      const question = lines[0].replace('?', '').trim();
      const options = lines.slice(1).map((line) => ({
        text: line.replace(/^[-+]/, '').trim(),
        isCorrect: line.startsWith('+'),
      }));

      return {
        question,
        options: shuffleArray(options),
        selected: null,
      };
    });
};

const TestPage = () => {
  const { lectureId } = useParams();
  const navigate = useNavigate();
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState({ correct: 0, total: 0 });
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const fetchTests = async () => {
      try {
        const response = await fetch(`/tests/lecture${lectureId}.txt`);
        if (!response.ok) throw new Error('Test file not found');
        const text = await response.text();
        setTests(shuffleArray(parseTestFile(text)));
      } catch (error) {
        console.error('Error loading test:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTests();
  }, [lectureId]);

  const handleAnswer = (index, selectedOption) => {
    setTests((prevTests) =>
      prevTests.map((test, i) =>
        i === index ? { ...test, selected: selectedOption } : test
      )
    );
  };

  const finishTest = () => {
    const correctAnswers = tests.filter((test) => {
      const correctOption = test.options.find((o) => o.isCorrect);
      return correctOption?.text === test.selected;
    }).length;

    setResults({ correct: correctAnswers, total: tests.length });
    setFinished(true);
  };

  if (loading) {
    return <div className="testspage-loader">Loading...</div>;
  }

  if (finished) {
    const accuracy = Math.round((results.correct / results.total) * 100);
    return (
      <div className="testspage-results">
        <h2>Test Completed</h2>
        <p>
          You answered <strong>{results.correct}</strong> out of <strong>{results.total}</strong> questions correctly.
        </p>
        <p>Accuracy: <strong>{accuracy}%</strong></p>
        <button onClick={() => navigate(-1)} className="testspage-back-button">
          Back
        </button>
      </div>
    );
  }

  return (
    <div className="testspage">
      <h1>Lecture {lectureId} Test</h1>
      <button onClick={() => navigate(-1)} className="testspage-back-button">
        Back
      </button>
      <div className="testspage-questions">
        {tests.map((test, index) => (
          <div key={index} className="testspage-question fade-in">
            <h3>{index + 1}. {test.question}</h3>
            <ul>
              {test.options.map((option, i) => (
                <li key={i}>
                  <label className={`option-label ${test.selected === option.text ? 'selected' : ''}`}>
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={option.text}
                      checked={test.selected === option.text}
                      onChange={() => handleAnswer(index, option.text)}
                    />
                    {option.text}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <button onClick={finishTest} className="testspage-finish-button">
        Finish Test
      </button>
    </div>
  );
};

export default TestPage;
