import "./App.css";
import ColorArea from "./components/ColorArea";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Color Box Generator</h1>
        <p>Click boxes to change color</p>
        <ColorArea />
        <button
          className="refresh-button"
          onClick={() => window.location.reload(true)}
        >
          New random colors
        </button>
      </header>
    </div>
  );
}

export default App;
