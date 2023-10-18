import React, { useState, useEffect, useRef } from "react";

export default function Board() {
  const [isCompleted, setIsCompleted] = useState(false);
  const audioRef = useRef(null);

  const [timeRemaining, setTimeRemaining] = useState(30 * 60);
  const [intervalId, setIntervalId] = useState(null);

  const [center, setCenter] = useState("center");
  const [petalOne, setpetalOne] = useState("petal petal-one");
  const [petalTwo, setpetalTwo] = useState("petal petal-two");
  const [petalThree, setpetalThree] = useState("petal petal-three");
  const [petalFour, setpetalFour] = useState("petal petal-four");
  const [petalFive, setpetalFive] = useState("petal petal-five");
  const [petalSix, setpetalSix] = useState("petal petal-six");
  const [redPalette, setredPalette] = useState(false);
  const [orangePalette, setorangePalette] = useState(false);
  const [yellowPalette, setyellowPalette] = useState(false);
  const [greenPalette, setgreenPalette] = useState(false);
  const [bluePalette, setbluePalette] = useState(false);
  const [purplePalette, setpurplePalette] = useState(false);
  const [pinkPalette, setpinkPalette] = useState(false);
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

  function handlePetalOne() {
    if (redPalette) {
      setpetalOne("petal petal-one petal-one-active");
    }
  }

  function handlePetalTwo() {
    if (orangePalette) {
      setpetalTwo("petal petal-two petal-two-active");
    }
  }

  function handlePetalThree() {
    if (yellowPalette) {
      setpetalThree("petal petal-three petal-three-active");
    }
  }

  function handlePetalFour() {
    if (greenPalette) {
      setpetalFour("petal petal-four petal-four-active");
    }
  }

  function handlePetalFive() {
    if (bluePalette) {
      setpetalFive("petal petal-five petal-five-active");
    }
  }

  function handlePetalSix() {
    if (purplePalette) {
      setpetalSix("petal petal-six petal-six-active");
    }
  }

  function handleCenter() {
    if (pinkPalette) {
      setCenter("center center-active");
    }
  }

  function handleRedClick() {
    setredPalette(true);
  }

  function handleOrangeClick() {
    setorangePalette(true);
  }

  function handleYellowClick() {
    setyellowPalette(true);
  }

  function handleGreenClick() {
    setgreenPalette(true);
  }

  function handleBlueClick() {
    setbluePalette(true);
  }

  function handlePurpleClick() {
    setpurplePalette(true);
  }

  function handlePinkClick() {
    setpinkPalette(true);
  }

  useEffect(() => {
    if (
      petalOne.includes("petal-one-active") &&
      petalTwo.includes("petal-two-active") &&
      petalThree.includes("petal-three-active") &&
      petalFour.includes("petal-four-active") &&
      petalFive.includes("petal-five-active") &&
      petalSix.includes("petal-six-active") &&
      center.includes("center-active")
    ) {
      setIsCompleted(true);
      audioRef.current.play();
    }
  }, [petalOne, petalTwo, petalThree, petalFour, petalFive, petalSix, center]);

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
