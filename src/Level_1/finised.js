import React, { useEffect, useRef } from 'react';
import { useNavigate } from "react-router";

export function Finish() {
  const audioRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    audioRef.current.play();
  }, []);

  return (
    <>
      <div className="congrats-message">
        Chúc mừng bé đã hoàn thành{" "}
        <div>
          <button
            className="home-button"
            onClick={() =>
              (window.location.href = "https://coco-game-tau.vercel.app/")
            }
          >
            Quay về trang chủ
          </button>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
          <button className="next-button" onClick={() => navigate('/MainPage_lv2',{replace:true})}>
            Đến trò chơi tiếp theo
          </button>
        </div>
        <div></div>
      </div>
      <audio ref={audioRef} src="sound/congratsSound.mp3" preload="auto"></audio>
    </>
  );
}