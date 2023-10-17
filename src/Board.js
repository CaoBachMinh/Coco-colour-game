import React, { useState } from "react";

export default function Board() {
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

  return (
    <div className="Board">
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
