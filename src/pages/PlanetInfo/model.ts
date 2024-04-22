import {createEffect, createStore} from 'effector';

export const fetchPlanetFx = createEffect(async (id: string) => {
    const url = `https://www.swapi.tech/api/planets/?name=${id}`;
    const req = await fetch(url);
    return req.json();
});

export const $searchedPlanet = createStore({info: {}})
    .on(fetchPlanetFx.doneData, (state, film) => ({
        ...state,
        info: film.result[0].properties,
    }))


fetchPlanetFx.doneData.watch((film) => {
    console.log(film)
});
