import React, { useState } from 'react';
import '../App.css';
function Color_Button({setcurcolor}) {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (colorId) => {
    setSelectedColor(colorId);
    setcurcolor(colorId);
    console.log(colorId);
  };

  const colorData = [
    { id: "maroon", backgroundColor: "maroon" },
    { id: "brown", backgroundColor: "brown" },
    { id: "crimson", backgroundColor: "crimson" },
    { id: "red", backgroundColor: "red" },
    { id: "coral", backgroundColor: "coral" },
    { id: "indianred", backgroundColor: "indianred" },
    { id: "salmon", backgroundColor: "salmon" },
    { id: "orange", backgroundColor: "orange" },
    { id: "darkkhaki", backgroundColor: "darkkhaki" },
    { id: "khaki", backgroundColor: "khaki" },
    { id: "olive", backgroundColor: "olive" },
    { id: "yellow", backgroundColor: "yellow" },
    { id: "hotpink", backgroundColor: "hotpink" },
    { id: "olivedrab", backgroundColor: "olivedrab" },
    { id: "green", backgroundColor: "green" },
    { id: "lime", backgroundColor: "lime" },
    { id: "springgreen", backgroundColor: "springgreen" },
    { id: "seagreen", backgroundColor: "seagreen" },
    { id: "teal", backgroundColor: "teal" },
    { id: "cyan", backgroundColor: "cyan" },
    { id: "cornflowerblue", backgroundColor: "cornflowerblue" },
    { id: "dodgerblue", backgroundColor: "dodgerblue" },
    { id: "navy", backgroundColor: "navy" },
    { id: "blue", backgroundColor: "blue" },
    { id: "darkmagenta", backgroundColor: "darkmagenta" },
    { id: "violet", backgroundColor: "violet" },
    { id: "magenta", backgroundColor: "magenta" },
    { id: "saddlebrown", backgroundColor: "saddlebrown" },
    { id: "chocolate", backgroundColor: "chocolate" },
    { id: "black", backgroundColor: "black" },
    { id: "gray", backgroundColor: "gray" },
    { id: "silver", backgroundColor: "silver" },
    { id: "white", backgroundColor: "white" },
  ];

  return (
    <div className="palette_1 justify-content-around container_1">
      {colorData.map((color, index) => (
        <div
          className={`color-button color-button-${color.id}`}
          id={color.id}
          style={{ backgroundColor: color.backgroundColor }}
          onClick={() => handleColorClick(color.id)}
          key={index}
        ></div>
      ))}
    </div>
    
  );
}


export default Color_Button;
