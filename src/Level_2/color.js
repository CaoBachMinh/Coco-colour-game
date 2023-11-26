import React from "react";
import { useState,useEffect } from "react";

export function Color(){
    const [selectedColor, setSelectedColor] = useState(null);

    const colorButton = [
      'maroon', 'brown', 'crimson', 'red', 'tomato', 'salmon', 'orangered',
      'darkorange', 'orange', 'gold', 'darkkhaki', 'khaki', 'olive', 'yellow', 'yellowgreen',
      'greenyellow', 'green', 'lime', 'limegreen', 'palegreen', 'springgreen', 'seagreen',
      'lightseagreen', 'darkslategray', 'teal', 'darkturquoise',
      'turquoise', 'aquamarine', 'cadetblue', 'steelblue', 'deepskyblue',
      'dodgerblue', 'skyblue', 'lightskyblue', 'navy', 'mediumblue', 'blue', 'royalblue',
      'indigo', 'darkslateblue', 'mediumslateblue', 'darkmagenta', 'darkviolet',
      'mediumorchid', 'purple', 'thistle', 'violet', 'mediumvioletred',
      'palevioletred', 'deeppink', 'hotpink', 'pink', 'beige', 'bisque', 'wheat',
      'lightyellow', 'saddlebrown', 'sienna', 'chocolate', 'burlywood', 'tan', 'rosybrown',
      'peachpuff', 'lavender', 'black', 'gray', 'gainsboro', 'white',
   ];
   const ClickColor = (color) => {
      setSelectedColor(color);
   };
   useEffect(() => {
      console.log(selectedColor);
    }, [selectedColor]);
   return(
        <div class="color_container_lv2">
            {colorButton.map((color, index) => (
               <div
                  key={index}
                  className={`color-button ${selectedColor === color ? 'selected' : ''}`}
                  style={{ background: color }}
                  onClick={() => {
                     ClickColor(color)
                  }}
               ></div>
            ))}
         </div>
   )
}