import { useState } from "react";
import "./App.css";
import {MisRutas} from "./rutas/rutas";

function App() {
  return (
    <div>
      <header>
        <h1 className="titulo">📽Peliculas</h1>
      </header>
      <MisRutas/>
    </div>
  );
}

export default App;
