import React, { useState } from "react";
import "../App.css";
import Button from "./Color_Button";
import { Board_lv1 } from "./Level1";

export default function Board() {
  
  const [curcolor,setcurcolor] = useState(null);

  return (
    <>

    <div className="Board">
        <Board_lv1 curcolor={curcolor} />
      </div>
      <img className="flower-img" src="/example_picture/flower.png" alt="flower"></img>
      <div className="button_color"><Button setcurcolor={setcurcolor}></Button></div>
      </>
  );
}
