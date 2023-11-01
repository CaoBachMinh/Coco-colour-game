import React, { useState } from "react";
import "../App.css";
import Button from "./Color_Button";
import { Board_lv1 } from "./Level1";
import {Instruction} from "../Instruction";
import { Finish } from "./finised";
export default function Board() {
  
  const [curcolor,setcurcolor] = useState(null);
  const [completed,setcompleted] = useState(false);
  return (
    <>
    <div><Instruction></Instruction></div>
    <div>
      <Finish/>
    </div>
    <div className="Board">
        <Board_lv1 curcolor={curcolor} setcompleted={setcompleted} />
      </div>
      <img className="flower-img" src="/example_picture/flower.png" alt="flower"></img>
      <div className="button_color"><Button setcurcolor={setcurcolor}></Button></div>
      </>
  );
}
