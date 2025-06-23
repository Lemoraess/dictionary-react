import logo from "./logo.jpg";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="SheCodes logo" />
      </header>
      <Dictionary defaultkeyword="sunset" />
      <footer>
        This project was coded by{" "}
        <a
          href="https://www.linkedin.com/in/lenise-m-santana-72b824311/"
          title="Go to Lenise Linkedin page"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lenise Moraes
        </a>{" "}
        and is open source in{" "}
        <a
          href="https://github.com/Lemoraess/dictionary-react"
          title="Go to github link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </footer>
    </div>
  );
}

export default App;
