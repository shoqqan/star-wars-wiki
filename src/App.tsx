import './App.css'
import {Navigate, Route, Routes} from "react-router-dom";
import {ROUTES} from "./models/routes.ts";
import {Films} from "./pages/Films/Films.tsx";
import {People} from "./pages/People/People.tsx";
import {Starships} from "./pages/Starships/Starships.tsx";
import {Planets} from "./pages/Planets/Planets.tsx";
import {FilmInfo} from "./pages/Films/FilmInfo/FilmInfo.tsx";

export const App = () => {
    return (
        <div className={'w-screen h-screen overflow-hidden bg-[#FFFFFF] font-raleway'}>
            <Routes>
                <Route path={ROUTES.FILMS} element={<Films/>}/>
                <Route path={ROUTES.PEOPLE} element={<People/>}/>
                <Route path={ROUTES.STARSHIPS} element={<Starships/>}/>
                <Route path={ROUTES.PLANETS} element={<Planets/>}/>
                <Route path={'planet_info/:id'} element={<Planets/>}/>
                <Route path={'people_info/:id'} element={<Planets/>}/>
                <Route path={'starship_info/:id'} element={<Planets/>}/>
                <Route path={'film_info/:id'} element={<FilmInfo/>}/>

                <Route path={''} element={<Navigate to={ROUTES.FILMS}/>}/>
                <Route path={'/'} element={<Navigate to={ROUTES.FILMS}/>}/>
            </Routes>
        </div>
    )
}

