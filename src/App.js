import logo from "./logo.jpg";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="SheCodes logo" />
      </header>
      <Dictionary />
      <footer>Coded by Lenise Moraes</footer>
    </div>
  );
}

export default App;
