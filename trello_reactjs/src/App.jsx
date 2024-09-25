import './App.css'
// eslint-disable-next-line no-unused-vars
import Board from './Components/Board';
function App() {
  return (
    <div className="App">
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Trello App</h1>
            <h2 className="subtitle">Organiza tus tareas</h2>
          </div>
        </div>
      </section>
      <div className="container mt-5">
        <Board />
      </div>
    </div>
  );
};

export default App
