import "../styles/ColorBox.css";

function ColorBox(props) {
  return (
    <div
      className="color-box"
      onClick={props.onBoxClick}
      style={{ backgroundColor: `${props.colorVal}` }}
    ></div>
  );
}

export default ColorBox;
