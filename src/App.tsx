import './App.css'
import {Navigate, Route, Routes} from "react-router-dom";
import {ROUTES} from "./models/routes.ts";
import {Films} from "./pages/Films/Films.tsx";
import {People} from "./pages/People/People.tsx";
import {Starships} from "./pages/Starships/Starships.tsx";
import {Planets} from "./pages/Planets/Planets.tsx";
import {FilmInfo} from "./pages/Films/FilmInfo/FilmInfo.tsx";
import {PlanetInfo} from "./pages/Planets/PlanetInfo/PlanetInfo.tsx";
import {PeopleInfo} from "./pages/People/PeopleInfo/PeopleInfo.tsx";
import {StarshipsInfo} from "./pages/Starships/StarshipsInfo/StarshipsInfo.tsx";

export const App = () => {
    return (
        <div className={'w-screen h-screen overflow-hidden bg-[#FFFFFF] font-raleway'}>
            <Routes>
                <Route path={ROUTES.FILMS} element={<Films/>}/>
                <Route path={ROUTES.PEOPLE} element={<People/>}/>
                <Route path={ROUTES.STARSHIPS} element={<Starships/>}/>
                <Route path={ROUTES.PLANETS} element={<Planets/>}/>
                <Route path={'planets_info/:id'} element={<PlanetInfo/>}/>
                <Route path={'people_info/:id'} element={<PeopleInfo/>}/>
                <Route path={'starships_info/:id'} element={<StarshipsInfo/>}/>
                <Route path={'film_info/:id'} element={<FilmInfo/>}/>

                <Route path={''} element={<Navigate to={ROUTES.FILMS}/>}/>
                <Route path={'/'} element={<Navigate to={ROUTES.FILMS}/>}/>
            </Routes>
        </div>
    )
}

