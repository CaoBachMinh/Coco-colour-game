import React, { useState, useEffect, useRef } from "react";
import './App.css';
function App({curcolor}){
  const [isCompleted, setIsCompleted] = useState(false);
  const audioRef = useRef(null);
  const [center, setCenter] = useState("center");
  const [petalone, setpetalone] = useState("petal petal-one petal-green-blink");
  const [petaltwo, setpetaltwo] = useState("petal petal-two");
  const [petalthree, setpetalthree] = useState("petal petal-three");
  const [petalfour, setpetalfour] = useState("petal petal-four");
  const [petalfive, setpetalfive] = useState("petal petal-five");
  const [petalsix, setpetalsix] = useState("petal petal-six");
  const [timeRemaining, setTimeRemaining] = useState(30 * 60);
  const [intervalId, setIntervalId] = useState(null);


  function handleColorClick (colorId,name) {
    console.log(colorId);
    if (colorId == curcolor){
      if (name == 'one') setpetalone("petal petal-one petal-one-active");
      else if (name == 'two') setpetaltwo("petal petal-two petal-two-active");
      else if (name == 'three') setpetalthree("petal petal-three petal-three-active");
      else if (name == 'four') setpetalfour("petal petal-four petal-four-active");
      else if (name == 'five') setpetalfive("petal petal-five petal-five-active");
      else if (name == 'six') setpetalsix("petal petal-six petal-six-active");
      else setCenter("center center-active");
    }
  };
  const formattedTimeRemaining = `${Math.floor(timeRemaining / 60)
    .toString()
    .padStart(2, "0")}:${(timeRemaining % 60).toString().padStart(2, "0")}`;

  useEffect(() => {
    const id = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(id);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    setIntervalId(id);

    // Cleanup effect
    return () => {
      clearInterval(id);
    };
  }, []);
  useEffect(() => {
    if (timeRemaining === 0) {
      window.alert(
        "Bạn đã chơi quá 30 phút! Hãy nghỉ ngơi và tránh chơi quá lâu."
      );
    }
  }, [timeRemaining]);

      useEffect(() => {
        if (
          petalone.includes("petal-one-active") &&
          petaltwo.includes("petal-two-active") &&
          petalthree.includes("petal-three-active") &&
          petalfour.includes("petal-four-active") &&
          petalfive.includes("petal-five-active") &&
          petalsix.includes("petal-six-active") &&
          center.includes("center-active")
        ) {
          setIsCompleted(true);
          console.log(isCompleted);
          audioRef.current.play();
        }
      }, [petalone, petaltwo, petalthree, petalfour, petalfive, petalsix, center]);
      const petals = [
        { className: petalone,  id:"red",number : "one"},
        { className: petaltwo,  id:"darkorange",number : "two"},
        { className: petalthree, id:"orange",number : "three"},
        { className: petalfour,  id:"green",number : "four"},
        { className: petalfive, id:"blue",number : "five"},
        { className: petalsix, id : "darkmagenta",number : "six"},
        { className: center, id : "hotpink",number : "center"},
      ];
    return(
      <div>
        {isCompleted && (
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
          <button className="next-button">
              Muc tiep theo              
            </button>
          </div>
          <div>
            
          </div>
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
        Gợi ý: Hãy nhấn vào số 1 và sau đó nhấn vào cánh hoa đang nhấp nháy để
        tô màu cánh hoa.
      </p>
        <div className="picture mb-4 d-flex justify-content-center">
      {petals.map((petal, index) => (
        <div className={petal.className} onClick={() => handleColorClick(petal.id,petal.number)} key={index}></div>
      ))}
    </div>
      </div>
      
    );
};
export default App;