import "./App.css";
import {MisRutas} from "./rutas/rutas";

function App() {
  return (
    <div>
      <header>
        <a href={'/'} ><h1 className="titulo">📽Peliculas</h1></a>
      </header>
      <MisRutas/>
    </div>
  );
}

export default App;
