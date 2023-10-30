import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Button from "./Color_Button";
import Instruction from "./Instruction";
import Board_lv1 from "./Board_lv1";
import Timer from "./Timer";
export default function Board() {
  
  const [curcolor,setcurcolor] = useState(null);

  return (
    <><div className="timer">
      <Timer />
    </div>
    <div> <Instruction/></div>
    <div className="Board">
        <Board_lv1 curcolor={curcolor} />
      </div>
      <div className="container_example_1"><img src="/example_picture/flower.PNG" alt="bird"></img></div>
      <div className="button_color"><Button setcurcolor={setcurcolor}></Button></div>
      </>
  );
}

