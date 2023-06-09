import logo from './platzi.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <TodoItem />
      <TodoItem />
      <TodoItem />

      <TodoCounter  
        completed={4}
        total={5}
      />
      <TodoCounter  
        completed={2}
        total={10}
      />
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita el archivo <code>src/App.js</code> y guarda para recargar.
        </p>
        <a
          className="App-link"
          href="https://platzi.com/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprendamos React
        </a>
      </header>
    </div>
  );
}

function TodoItem(){
  return(
    <li>
      <span>V</span>
      <p>Llorar con la Llorona</p>
      <span>X</span>
    </li>
  );
}

function TodoCounter(props){
  return(
    <p>
      Tienes {props.completed} TODOs hechos de {props.total}
    </p>
  );
}
export default App;
