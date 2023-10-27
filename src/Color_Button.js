import React, { useState } from 'react';
<<<<<<< Updated upstream

function App() {
=======
import './App.css';
function App({setcurcolor}) {
>>>>>>> Stashed changes
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (colorId) => {
    setSelectedColor(colorId);
<<<<<<< Updated upstream
=======
    setcurcolor(colorId);
    console.log(colorId);
>>>>>>> Stashed changes
  };

  const colorData = [
    { id: "maroon", backgroundColor: "maroon" },
    { id: "brown", backgroundColor: "brown" },
    { id: "crimson", backgroundColor: "crimson" },
    { id: "red", backgroundColor: "red" },
    { id: "tomato", backgroundColor: "tomato" },
    { id: "coral", backgroundColor: "coral" },
    { id: "indianred", backgroundColor: "indianred" },
    { id: "salmon", backgroundColor: "salmon" },
    { id: "orangered", backgroundColor: "orangered" },
    { id: "darkorange", backgroundColor: "darkorange" },
    { id: "orange", backgroundColor: "orange" },
    { id: "gold", backgroundColor: "gold" },
    { id: "darkgoldenrod", backgroundColor: "darkgoldenrod" },
    { id: "goldenrod", backgroundColor: "goldenrod" },
    { id: "darkkhaki", backgroundColor: "darkkhaki" },
    { id: "khaki", backgroundColor: "khaki" },
    { id: "olive", backgroundColor: "olive" },
    { id: "yellow", backgroundColor: "yellow" },
    { id: "yellowgreen", backgroundColor: "yellowgreen" },
    { id: "darkolivegreen", backgroundColor: "darkolivegreen" },
    { id: "olivedrab", backgroundColor: "olivedrab" },
    { id: "greenyellow", backgroundColor: "greenyellow" },
    { id: "darkgreen", backgroundColor: "darkgreen" },
    { id: "green", backgroundColor: "green" },
    { id: "forestgreen", backgroundColor: "forestgreen" },
    { id: "lime", backgroundColor: "lime" },
    { id: "limegreen", backgroundColor: "limegreen" },
    { id: "palegreen", backgroundColor: "palegreen" },
    { id: "springgreen", backgroundColor: "springgreen" },
    { id: "seagreen", backgroundColor: "seagreen" },
    { id: "mediumaquamarine", backgroundColor: "mediumaquamarine" },
    { id: "lightseagreen", backgroundColor: "lightseagreen" },
    { id: "darkslategray", backgroundColor: "darkslategray" },
    { id: "teal", backgroundColor: "teal" },
    { id: "cyan", backgroundColor: "cyan" },
    { id: "darkturquoise", backgroundColor: "darkturquoise" },
    { id: "turquoise", backgroundColor: "turquoise" },
    { id: "paleturquoise", backgroundColor: "paleturquoise" },
    { id: "aquamarine", backgroundColor: "aquamarine" },
    { id: "cadetblue", backgroundColor: "cadetblue" },
    { id: "steelblue", backgroundColor: "steelblue" },
    { id: "cornflowerblue", backgroundColor: "cornflowerblue" },
    { id: "deepskyblue", backgroundColor: "deepskyblue" },
    { id: "dodgerblue", backgroundColor: "dodgerblue" },
    { id: "skyblue", backgroundColor: "skyblue" },
    { id: "lightskyblue", backgroundColor: "lightskyblue" },
    { id: "midnightblue", backgroundColor: "midnightblue" },
    { id: "navy", backgroundColor: "navy" },
    { id: "mediumblue", backgroundColor: "mediumblue" },
    { id: "blue", backgroundColor: "blue" },
    { id: "royalblue", backgroundColor: "royalblue" },
    { id: "indigo", backgroundColor: "indigo" },
    { id: "darkslateblue", backgroundColor: "darkslateblue" },
    { id: "mediumslateblue", backgroundColor: "mediumslateblue" },
    { id: "mediumpurple", backgroundColor: "mediumpurple" },
    { id: "darkmagenta", backgroundColor: "darkmagenta" },
    { id: "darkviolet", backgroundColor: "darkviolet" },
    { id: "mediumorchid", backgroundColor: "mediumorchid" },
    { id: "purple", backgroundColor: "purple" },
    { id: "thistle", backgroundColor: "thistle" },
    { id: "violet", backgroundColor: "violet" },
    { id: "magenta", backgroundColor: "magenta" },
    { id: "mediumvioletred", backgroundColor: "mediumvioletred" },
    { id: "palevioletred", backgroundColor: "palevioletred" },
    { id: "deeppink", backgroundColor: "deeppink" },
    { id: "hotpink", backgroundColor: "hotpink" },
    { id: "pink", backgroundColor: "pink" },
    { id: "beige", backgroundColor: "beige" },
    { id: "bisque", backgroundColor: "bisque" },
    { id: "blanchedalmond", backgroundColor: "blanchedalmond" },
    { id: "wheat", backgroundColor: "wheat" },
    { id: "lemonchiffon", backgroundColor: "lemonchiffon" },
    { id: "lightyellow", backgroundColor: "lightyellow" },
    { id: "saddlebrown", backgroundColor: "saddlebrown" },
    { id: "sienna", backgroundColor: "sienna" },
    { id: "chocolate", backgroundColor: "chocolate" },
    { id: "peru", backgroundColor: "peru" },
    { id: "sandybrown", backgroundColor: "sandybrown" },
    { id: "burlywood", backgroundColor: "burlywood" },
    { id: "tan", backgroundColor: "tan" },
    { id: "rosybrown", backgroundColor: "rosybrown" },
    { id: "moccasin", backgroundColor: "moccasin" },
    { id: "peachpuff", backgroundColor: "peachpuff" },
    { id: "mistyrose", backgroundColor: "mistyrose" },
    { id: "linen", backgroundColor: "linen" },
    { id: "lightsteelblue", backgroundColor: "lightsteelblue" },
    { id: "lavender", backgroundColor: "lavender" },
    { id: "honeydew", backgroundColor: "honeydew" },
    { id: "azure", backgroundColor: "azure" },
    { id: "snow", backgroundColor: "snow" },
    { id: "black", backgroundColor: "black" },
    { id: "gray", backgroundColor: "gray" },
    { id: "silver", backgroundColor: "silver" },
    { id: "gainsboro", backgroundColor: "gainsboro" },
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
<<<<<<< Updated upstream
  );
}

export default App;
=======
    
  );
}


export default App;

>>>>>>> Stashed changes
