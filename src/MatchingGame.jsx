import React, { useState, useEffect } from "react";
import "./MatchingGame.css";
// sfx
import correctpop from "./assets/MinnowSFX/correctpop.wav"
import incorrectpop from "./assets/MinnowSFX/incorrectpop.wav"

// question bank
import MatchingGameQuestionBank from "./MatchingGameQuestionBank.jsx"

/** old question bank
 * const wordsData = [
 * { id: 1, word: "Osmosis", definition: "Movement of water through a semi-permeable membrane." },
 * { id: 2, word: "Photosynthesis", definition: "Process by which plants convert sunlight into energy." },
 * { id: 3, word: "Evaporation", definition: "Process of a liquid turning into vapor." },
 * ];
 */

export default function MatchingGame() {
  const [matches, setMatches] = useState({});
  const [draggedWord, setDraggedWord] = useState(null);
  const [feedback, setFeedback] = useState({}); // for visual feedback (correct/incorrect)
  const [isComplete, setIsComplete] = useState(false);
  const [difficulty, setDifficulty] = useState("easy");
  const [correctInDifficulty, setCorrectInDifficulty] = useState(0); 
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [questionSet, setQuestionSet] = useState([]); 
  const initialWords = [];
  const [words, setWords] = useState(initialWords);
  const [definitions, setDefinitions] = useState([]);


  useEffect(() => {
    loadNewQuestions("easy");
  }, []);

  function loadNewQuestions(level) {
    const pool = MatchingGameQuestionBank[level];
    if (!pool) {
      console.error("Invalid difficulty:", level);
      return; // this fix suggested by AI to prevent crashing
    }
    const chosen = shuffle(pool).slice(0, 3);
    setQuestionSet(chosen);
    setWords(chosen);
    setDefinitions(shuffle([...chosen]));
  }

  function shuffle(array) {
    return [...array].sort(() => Math.random() - 0.5);
  }

  function handleDragStart(word) {
    setDraggedWord(word);
  }

  function handleDrop(definition) {
    if (!draggedWord) return;

    if (draggedWord.id === definition.id) {
      // Correct match
      setMatches((prev) => ({ ...prev, [definition.id]: draggedWord }));
      setWords((prev) => prev.filter((w) => w.id !== draggedWord.id));
      setFeedback((prev) => ({ ...prev, [definition.id]: "correct" }));
      new Audio(correctpop).play(); // plays good ding

      const newTotal = totalCorrect + 1;
      const newDiffCount = correctInDifficulty + 1;
      setTotalCorrect(newTotal);
      setCorrectInDifficulty(newDiffCount);

      // after five easy corrects, move to medium
      if (difficulty === "easy" && newDiffCount >= 5) {
        setDifficulty("medium");
        setCorrectInDifficulty(0);
        setMatches({});
        setFeedback({});
        loadNewQuestions("medium");
        return;
      }

      // after five medium corrects, move to hard
      if (difficulty === "medium" && newDiffCount >= 5) {
        setDifficulty("hard");
        setCorrectInDifficulty(0);
        setMatches({});
        setFeedback({});
        loadNewQuestions("hard");
        return;
      }

      // finish game after fifteen corrects
      if (newTotal >= 15) {
        setIsComplete(true);
        return;
      }

      // when words run out
      if (Object.keys(matches).length + 1 === questionSet.length) {
        loadNewQuestions(difficulty);
        setMatches({});
      }

    } else {
      // Incorrect match
      setFeedback((prev) => ({ ...prev, [definition.id]: "incorrect" }));
      new Audio(incorrectpop).play(); // plays bad ding

      // Remove feedback after a short delay
      setTimeout(() => {
        setFeedback((prev) => ({ ...prev, [definition.id]: null }));
      }, 800);
    }

    setDraggedWord(null);
  }

  function handleDragOver(e) {
    e.preventDefault();
  }

  function resetGame() {
    setDifficulty("easy");
    setCorrectInDifficulty(0);
    setTotalCorrect(0);
    setMatches({});
    setFeedback({});
    setIsComplete(false);
    loadNewQuestions("easy");
  }

  return (
    <div className="matching-game">
      <h2>Word Matching Game</h2>
      <p>Drag each word onto its correct definition.</p>

      <div className="game-container">
        <div className="column">
          <h3>Words</h3>
          {words.map((word) => (
            <div
              key={word.id}
              className="word-card"
              draggable
              onDragStart={() => handleDragStart(word)}
            >
              {word.word}
            </div>
          ))}
        </div>

        <div className="column">
          <h3>Definitions</h3>
          {definitions.map((definition) => (
            <div
              key={definition.id}
              className={`definition-card 
                ${matches[definition.id] ? "matched" : ""} 
                ${feedback[definition.id] === "correct" ? "correct" : ""}
                ${feedback[definition.id] === "incorrect" ? "incorrect" : ""}
              `}
              onDrop={() => handleDrop(definition)}
              onDragOver={handleDragOver}
            >
              {matches[definition.id]
                ? `${definition.word}`
                : definition.definition}
            </div>
          ))}
        </div>
      </div>

      {isComplete && (
        <div className="complete-message">
          Congratulations! You matched all the words!{" "}   
          <button onClick={resetGame}>Play Again</button>
        </div>
      )}
    </div>
  );
}