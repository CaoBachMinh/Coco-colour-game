import Board from "./Board";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Board />
        <footer>
          This game was coded by CocoGame and is{" "}
          <a
            href="https://coco-game.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
