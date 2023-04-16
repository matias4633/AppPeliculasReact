import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { LandingPage } from "../paginas/LandingPage";
import { MovieDetalls } from "../paginas/MovieDetalls";

export function MisRutas(){
    return (<Router>
        <Routes>
            <Route exact path="/" element={<LandingPage/>}/>
            <Route exact path="/movies/:movieId" element={<MovieDetalls/>} />
        </Routes>
    </Router>);
}