import React, { useState, useEffect, useRef } from "react";
import '../App.css';
import { useNavigate } from "react-router";

export function Board_lv1({curcolor}){
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
  useEffect(() => {
    if(isCompleted){
      navigate('/MainPage_lv2',{replace:true})
    }
  },[isCompleted])
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
        { className: petaltwo,  id:"orange",number : "two"},
        { className: petalthree, id:"yellow",number : "three"},
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
        <div className="picture mb-4 d-flex justify-content-center">
      {petals.map((petal, index) => (
        <div className={petal.className} onClick={() => handleColorClick(petal.id,petal.number)} key={index}></div>
      ))}
        </div>
      </div>
      
    );  
};