import {createEffect, createStore} from "effector";

export const fetchStarshipsFx = createEffect(async () => {
    const url = `https://swapi.dev/api/starships`;
    const req = await fetch(url);
    return req.json();
})
export const $starships = createStore([])
    .on(fetchStarshipsFx.doneData, (_, starships) => starships.results)