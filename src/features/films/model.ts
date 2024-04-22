import {createEffect, createStore} from "effector";

export const fetchFilmsFx = createEffect(async () => {
    const url = `https://www.swapi.tech/api/films`;
    const req = await fetch(url);
    return req.json();
})
export const $films = createStore([])
    .on(fetchFilmsFx.doneData, (_, films) => films.result)
