import logo from "./logo.svg";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <header className="App-header">
          <a
            href="https://brilliant-meerkat-d49135.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={logo} className="logo" alt="Header Logo" />
          </a>
          <h1 className="text-center fw-bold fs-1 p-3">
            Dictionary Application
          </h1>
        </header>
        <Dictionary />
        <footer className="mt-5">
          Open-sourse project,{" "}
          <a
            href="https://github.com/sophxmia/react-weather-forecast-app"
            target="_blank"
            rel="noreferrer"
            title="GitHub link"
          >
            hosted on GitHub
          </a>
          , written by{" "}
          <a
            href="https://brilliant-meerkat-d49135.netlify.app/"
            target="_blank"
            rel="noreferrer"
            title="Netlify link to the project"
          >
            Sofiia Maliarenko
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
