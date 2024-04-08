import {Navigate, Route, Routes} from "react-router-dom";
import {PlanetInfo} from "../../pages/PlanetInfo";
import {PeopleInfo} from "../../pages/PeopleInfo";
import {StarshipsInfo} from "../../pages/StarshipsInfo";
import {FilmInfo} from "../../pages/FilmInfo";
import {ROUTES} from "../../models/routes.ts";
import {Home} from "../../pages/homePage";
import {Films} from "../../features/films";
import {People} from "../../features/people";
import {Starships} from "../../features/starships";
import {Planets} from "../../features/planets";

export const AppRouters = () => {
    return (
        <Routes>
            <Route path={'planets_info/:id'} element={<PlanetInfo/>}/>
            <Route path={'people_info/:id'} element={<PeopleInfo/>}/>
            <Route path={'starships_info/:id'} element={<StarshipsInfo/>}/>
            <Route path={'film_info/:id'} element={<FilmInfo/>}/>
            <Route path={'home'} element={<Home/>}>
                <Route path={ROUTES.FILMS} element={<Films/>}/>
                <Route path={ROUTES.PEOPLE} element={<People/>}/>
                <Route path={ROUTES.STARSHIPS} element={<Starships/>}/>
                <Route path={ROUTES.PLANETS} element={<Planets/>}/>
            </Route>
            <Route path={''} element={<Navigate to={'home/films'}/>}/>
            <Route path={'/'} element={<Navigate to={'home/films'}/>}/>
        </Routes>
    );
};

