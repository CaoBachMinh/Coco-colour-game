import React, { useState, useEffect, useRef } from "react";
import Board from "./Level_1/Board";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainPage_lv2 } from "./Level_2/MainPage_lv2";
import { Bear } from "./Level_2/Bear";
import { Bird } from "./Level_2/Bird";
import { Rabbit } from "./Level_2/Rabbit";
import { Timer } from "./Timer";
import Popup from './Popup-alert/alart-popup';

function App() {
  const [isPlayingGuide, setIsPlayingGuide] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
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

      
      <Router>
        {!hasStarted ? (
          <div className="start-container">
            <button className="start-button" onClick={startGame}>
              Nghe hướng dẫn chơi
            </button>
            {isPlayingGuide && <p>Đang phát âm thanh ...</p>}
          </div>
        ) : (
          <>
          {!showPopup ? (
            <>
            <div className="Timer">
              <Timer setShowPopup ={setShowPopup}/>
            </div>
            <Routes>
                <Route path='/' element={<Board />} />
                <Route path='/MainPage_lv2' element={<MainPage_lv2 />} />
                <Route path='/Bear' element={<Bear />} />
                <Route path='/Bird' element={<Bird />} />
                <Route path='/Rabbit' element={<Rabbit />} />
              </Routes>
            </>
          ) : (
            <Popup/>
          )}
          </>
        )}
        
      </Router>
      
    </div>
  );
}

export default App;
