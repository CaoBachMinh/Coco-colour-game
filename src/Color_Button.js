import React, { useState } from 'react';
import './App.css';
function App({setcurcolor}) {
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
    { id: "darkorange", backgroundColor: "darkorange" },
    { id: "orange", backgroundColor: "orange" },
    { id: "darkgoldenrod", backgroundColor: "darkgoldenrod" },
    { id: "goldenrod", backgroundColor: "goldenrod" },
    { id: "darkkhaki", backgroundColor: "darkkhaki" },
    { id: "khaki", backgroundColor: "khaki" },
    { id: "olive", backgroundColor: "olive" },
    { id: "yellow", backgroundColor: "yellow" },
    { id: "hotpink", backgroundColor: "hotpink" },
    { id: "olivedrab", backgroundColor: "olivedrab" },
    { id: "greenyellow", backgroundColor: "greenyellow" },
    { id: "darkgreen", backgroundColor: "darkgreen" },
    { id: "green", backgroundColor: "green" },
    { id: "lime", backgroundColor: "lime" },
    { id: "springgreen", backgroundColor: "springgreen" },
    { id: "seagreen", backgroundColor: "seagreen" },
    { id: "teal", backgroundColor: "teal" },
    { id: "cyan", backgroundColor: "cyan" },
    { id: "cornflowerblue", backgroundColor: "cornflowerblue" },
    { id: "dodgerblue", backgroundColor: "dodgerblue" },
    { id: "skyblue", backgroundColor: "skyblue" },
    { id: "navy", backgroundColor: "navy" },
    { id: "blue", backgroundColor: "blue" },
    { id: "indigo", backgroundColor: "indigo" },
    { id: "darkslateblue", backgroundColor: "darkslateblue" },
    { id: "darkmagenta", backgroundColor: "darkmagenta" },
    { id: "darkviolet", backgroundColor: "darkviolet" },
    { id: "violet", backgroundColor: "violet" },
    { id: "magenta", backgroundColor: "magenta" },
    { id: "saddlebrown", backgroundColor: "saddlebrown" },
    { id: "chocolate", backgroundColor: "chocolate" },
    { id: "rosybrown", backgroundColor: "rosybrown" },
    { id: "black", backgroundColor: "black" },
    { id: "gray", backgroundColor: "gray" },
    { id: "silver", backgroundColor: "silver" },
    { id: "white", backgroundColor: "white" },
  ];

  return (
    <div className="palette justify-content-around container_1">
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


export default App;

