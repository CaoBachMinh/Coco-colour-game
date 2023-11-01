import React, { useState, useEffect, useRef } from "react";
import '../App.css';
import { useNavigate } from "react-router";

export function Board_lv1({ curcolor, setcompleted }) {
  const navigate = useNavigate();
  const [isCompleted, setIsCompleted] = useState(false);
  const audioRef = useRef(null);
  const [center, setCenter] = useState("center");
  const [petalone, setpetalone] = useState("petal petal-one petal-green-blink");
  const [petaltwo, setpetaltwo] = useState("petal petal-two");
  const [petalthree, setpetalthree] = useState("petal petal-three");
  const [petalfour, setpetalfour] = useState("petal petal-four");
  const [petalfive, setpetalfive] = useState("petal petal-five");
  const [petalsix, setpetalsix] = useState("petal petal-six");


  function handleColorClick(name) {
    console.log(curcolor);
    const activeClass = `color-button-${curcolor}`;
    if (name == 'one') {
      setpetalone(`petal petal-${name} ${activeClass}`);
    }
    else if (name == 'two') setpetaltwo(`petal petal-${name} ${activeClass}`);
    else if (name == 'three') setpetalthree(`petal petal-${name} ${activeClass}`);
    else if (name == 'four') setpetalfour(`petal petal-${name} ${activeClass}`);
    else if (name == 'five') setpetalfive(`petal petal-${name} ${activeClass}`);
    else if (name == 'six') setpetalsix(`petal petal-${name} ${activeClass}`);
    else setCenter(`center ${activeClass}`);
  };

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
      setcompleted(true);
      console.log(isCompleted);

    }
  }, [petalone, petaltwo, petalthree, petalfour, petalfive, petalsix, center]);
  const petals = [
    { className: petalone, id: "red", number: "one" },
    { className: petaltwo, id: "orange", number: "two" },
    { className: petalthree, id: "yellow", number: "three" },
    { className: petalfour, id: "green", number: "four" },
    { className: petalfive, id: "blue", number: "five" },
    { className: petalsix, id: "darkmagenta", number: "six" },
    { className: center, id: "hotpink", number: "center" },
  ];
  return (
    <div>
      <div className="picture mb-4 d-flex justify-content-center">
        {petals.map((petal, index) => (
          <div className={petal.className} onClick={() => handleColorClick(petal.number)} key={index}></div>
        ))}
      </div>
    </div>

  );
};