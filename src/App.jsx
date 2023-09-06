import "./App.css";
import {MisRutas} from "./rutas/rutas";
import logo from "./assets/block.png";

function App() {
  return (
    <div>
      <div className="logoPrincipal">
        <a href={'/'} ><img  src={logo}></img></a>
      </div>
      <MisRutas/>
    </div>
  );
}

export default App;
