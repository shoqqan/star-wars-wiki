import {createEffect, createStore} from "effector";

export const fetchPlanetsFx = createEffect(async () => {
    const url = `https://swapi.dev/api/planets`;
    const req = await fetch(url);
    return req.json();
})
export const $planets = createStore([])
    .on(fetchPlanetsFx.doneData, (_, planets) => planets.results)