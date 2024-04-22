import './styles/index.css'
import {AppRouters} from "./routers";
import {useEffect} from "react";
import {fetchFilmsFx} from "../features/films/model.ts";
import {fetchPeopleFx} from "../features/people/model.ts";
import {fetchStarshipsFx} from "../features/starships/model.ts";
import {fetchPlanetsFx} from "../features/planets/model.ts";

export const App = () => {
    useEffect(() => {
        if (!sessionStorage.getItem("firstRender")) {
            fetchFilmsFx()
            fetchPeopleFx()
            fetchStarshipsFx()
            fetchPlanetsFx()
        }
    })
    return (
        <div className={'w-screen h-screen overflow-hidden bg-[#FFFFFF] font-raleway'}>
            <AppRouters/>
        </div>
    )
}

