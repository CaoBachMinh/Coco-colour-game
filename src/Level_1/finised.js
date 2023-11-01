import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router";
import "../Level_2/Board_lv2.css";
export function Finish(name) {
  const navigate = useNavigate();
  const [isDone, setIsDone] = useState(false);
  const audio = new Audio("/sound/Be-gioi-qua-di.mp3")
  const Clicked = () => {
    audio.play();
    setIsDone(true);
  };
  return (
    <>
      <div className="name">
        <div>
          <button
            className="home-button"
            onClick={() =>
              Clicked()
            }
          >
            Hoàn thành
          </button>
          <>
            {isDone && (
              <button className="next-button" onClick={() => navigate('/MainPage_lv2', { replace: true })}>
                Đến trò chơi tiếp theo
              </button>
            )}
          </>
        </div>
      </div>
    </>
  );
}