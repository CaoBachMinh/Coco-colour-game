import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Button from "./Color_Button";
<<<<<<< Updated upstream

=======
import Board_lv1 from "./Board_lv1";
>>>>>>> Stashed changes
export default function Board() {
  
  const [curcolor,setcurcolor] = useState(null);

  return (
    <div className="Board">
      <Board_lv1 curcolor={curcolor}/>
      <Button setcurcolor={setcurcolor}/>
    </div>
  );
}
