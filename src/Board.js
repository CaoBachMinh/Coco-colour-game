import React, { useState, useEffect, useRef } from "react";
import "./App.css";

export default function Board() {
  
  const [curcolor,setcurcolor] = useState(null);

  return (
    <div className="Board">
      {isCompleted && (
        <div className="congrats-message">
          Chúc mừng bé đã hoàn thành{" "}
          <button
            className="home-button"
            onClick={() =>
              (window.location.href = "https://coco-game-tau.vercel.app/")
            }
          >
            Quay về trang chủ
          </button>
        </div>
      )}
      <audio
        ref={audioRef}
        src="sound/congratsSound.mp3"
        preload="auto"
      ></audio>
      <div className="timer">
        Thời gian còn lại: {formattedTimeRemaining}
        <p>Khuyến cáo chơi game 30 phút/ngày</p>
      </div>
      <p className="instructions">
        Hướng dẫn chơi trò chơi tô màu theo số thứ tự:
        <br />
        1. Nhấn vào các mảnh hoa để tô màu chúng theo thứ tự từ 1 đến 7. 
        <br />
        2. Chọn màu sắc từ bảng màu hàng ngang bên dưới và tô màu vào các mảnh
        hoa.
        <br />
        3. Khi tất cả mảnh hoa đã được tô màu đúng thứ tự, bạn sẽ hoàn thành trò
        chơi.
        <br />
        Gợi ý: Hãy nhấn vào số 1 và sau đó nhấn vào cánh hoa đang nhấp nháy để tô màu cánh hoa.
      </p>

      <div className="picture mb-4 d-flex justify-content-center">
        <div className={petalOne} onClick={handlePetalOne}>
          1
        </div>
        <div className={petalTwo} onClick={handlePetalTwo}>
          2
        </div>
        <div className={petalThree} onClick={handlePetalThree}>
          3
        </div>
        <div className={petalFour} onClick={handlePetalFour}>
          4
        </div>
        <div className={petalFive} onClick={handlePetalFive}>
          5
        </div>
        <div className={petalSix} onClick={handlePetalSix}>
          6
        </div>
        <div className={center} onClick={handleCenter}>
          7
        </div>
      </div>
      <div className="palette d-flex justify-content-around">
        <div className="palette-color palette-red" onClick={handleRedClick}>
          1
        </div>
        <div
          className="palette-color palette-orange"
          onClick={handleOrangeClick}
        >
          2
        </div>
        <div
          className="palette-color palette-yellow"
          onClick={handleYellowClick}
        >
          3
        </div>
        <div className="palette-color palette-green" onClick={handleGreenClick}>
          4
        </div>
        <div className="palette-color palette-blue" onClick={handleBlueClick}>
          5
        </div>
        <div
          className="palette-color palette-purple"
          onClick={handlePurpleClick}
        >
          6
        </div>
        <div className="palette-color palette-pink" onClick={handlePinkClick}>
          7
        </div>
      </div>
    </div>
  );
}
