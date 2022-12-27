import Header from "./Header";
import "./sass/App.css";

function App() {
  return (
    <div>
      <Header />
      <main>
        <h1> Check my amazing menu & submenu! </h1>
      </main>
      <footer className="flex">
        <a
          href="https://github.com/cgbl-90"
          target="_blank"
          rel="noopener noreferrer"
        >
          .github.
        </a>
        <a href="https://t.me/cg_bl" target="_blank" rel="noopener noreferrer">
          .let's connect on telegram.
        </a>
      </footer>
    </div>
  );
}

export default App;
