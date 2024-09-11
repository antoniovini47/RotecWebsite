import "./App.css";

function App() {
  return (
    <>
      <div className="card">
        <h1>Hello, fellow! 👋</h1>
        <p>
          <button onClick={() => (window.location.href = "https://github.com/antoniovini47")}>
            GitHub - Antonio
          </button>
        </p>
        <p>
          <button onClick={() => (window.location.href = "https://linkedin.com/in/antoniovini47")}>
            LinkedIn - Antonio
          </button>
        </p>
        <h1>Apps</h1>
        <p>
          <button
            onClick={() =>
              (window.location.href =
                "https://play.google.com/store/apps/details?id=com.rotech.iadieta")
            }>
            Android App: IA Dieta
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
