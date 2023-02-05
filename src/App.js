import "./App.css";
import ColorArea from "./components/ColorArea";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ColorArea />
        <button
          className="refresh-button"
          onClick={() => window.location.reload(true)}
        >
          Refresh page
        </button>
      </header>
    </div>
  );
}

export default App;
