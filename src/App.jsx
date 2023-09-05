import "./App.css";
import {MisRutas} from "./rutas/rutas";
import logo from "./assets/block.png";

function App() {
  return (
    <div>
      <header>
        <a href={'/'} ><img className="logoPrincipal" src={logo}></img></a>
      </header>
      <MisRutas/>
    </div>
  );
}

export default App;
