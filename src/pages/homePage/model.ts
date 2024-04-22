import {ROUTES} from "../../models/routes.ts";
import {createEvent, createStore} from "effector";

export const sectionsData = {
    [ROUTES.FILMS]: {
        infoUrl: "/film_info/"
    },
    [ROUTES.PEOPLE]: {
        infoUrl: "/people_info/"
    },
    [ROUTES.PLANETS]: {
        infoUrl: "/planets_info/"
    },
    [ROUTES.STARSHIPS]: {
        infoUrl: "/starships_info/"
    },
}

export const setSection = createEvent()

export const $section = createStore<ROUTES>(localStorage.getItem("section")?localStorage.getItem("section"):ROUTES.FILMS)
    .on(setSection, (_, section) => {
        localStorage.setItem('section', section)
        return section
    })
