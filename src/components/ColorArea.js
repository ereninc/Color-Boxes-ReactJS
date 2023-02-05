import ColorBox from "./ColorBox";
import { useEffect, useState } from "react";
import extendedColorNames from "../helpers/Colors.js";
import "../styles/ColorArea.css";

function ColorArea() {
  const colorBoxCount = 18;
  const [colors, setColors] = useState([]);

  useEffect(() => {
    const newColors = [];
    for (let i = 0; i < colorBoxCount; i++) {
      const randomColor =
        extendedColorNames[
          Math.floor(Math.random() * extendedColorNames.length)
        ];
      newColors.push(randomColor);
    }
    setColors(newColors);
  }, []);

  return (
    <div className="color-area">
      {colors.map((color, i) => (
        <ColorBox
          key={i}
          colorVal={color}
          onBoxClick={(e) => {
            onBoxClick(e, colors, setColors, i);
          }}
        />
      ))}
    </div>
  );
}

function onBoxClick(e, colors, setColors, i) {
  e.target.colorVal = "";
  colors[i] =
    extendedColorNames[Math.floor(Math.random() * extendedColorNames.length)];
  setColors([...colors]);
}

export default ColorArea;
