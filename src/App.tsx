import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="card">
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Hello, fellow!</h1>
        <p>
          <button onClick={() => (window.location.href = "https://github.com/antoniovini47")}>
            GitHub
          </button>
        </p>
        <p>
          <button onClick={() => (window.location.href = "https://linkedin.com/in/antoniovini47")}>
            LinkedIn
          </button>
        </p>
        <p>
          <button
            onClick={() =>
              (window.location.href =
                "https://play.google.com/store/apps/details?id=com.rotech.dezeroacinquenta")
            }>
            Android App: Zero a Cinquenta
          </button>
        </p>
        <p>
          <button
            onClick={() =>
              (window.location.href =
                "https://play.google.com/store/apps/details?id=com.rotech.examepsicotecnico")
            }>
            Android App: Exame Psicotécnico
          </button>
        </p>
      </div>
    </>
  );
}

export default App;
