import React, { useState, useEffect, useRef } from "react";
import Board from "./Board";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  const [isPlayingGuide, setIsPlayingGuide] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const guideAudioRef = useRef(null);
  const gameAudioRef = useRef(null);
  useEffect(() => {
    if (hasStarted) {
      gameAudioRef.current.play();
    }
  }, [hasStarted]);

  const startGame = () => {
    setIsPlayingGuide(true);
    guideAudioRef.current.volume = 1.0;
    guideAudioRef.current.play();
    guideAudioRef.current.onended = () => {
      setHasStarted(true);
      setIsPlayingGuide(false);
    };
  };

  return (
    <div className="App">
      <audio ref={guideAudioRef}>
        <source
          src={`${process.env.PUBLIC_URL}/sound/guide.mp3`}
          type="audio/mpeg"
        />
      </audio>
      <audio ref={gameAudioRef} loop>
        <source
          src={`${process.env.PUBLIC_URL}/sound/sound.mp3`}
          type="audio/mpeg"
        />
      </audio>

      {!hasStarted ? (
        <div className="start-container">
          <button className="start-button" onClick={startGame}>
            Nghe hướng dẫn chơi
          </button>
          {isPlayingGuide && <p>Đang phát âm thanh ...</p>}
        </div>
      ) : (
        <div className="container">
          <Board />
        </div>
      )}
      
    </div>
  );
}

export default App;
