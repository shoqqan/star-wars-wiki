import {createEffect, createStore} from 'effector';

export const fetchCharacterFx = createEffect(async (id: string) => {
    const url = `https://www.swapi.tech/api/people/?name=${id}`;
    const req = await fetch(url);
    return req.json();
});

export const fetchHomeFx = createEffect(async (url: string) => {
    const req = await fetch(url);
    return req.json();
});

export const $characterInfo = createStore({info: {}, films: [], home: "", species: [], starships: []})
    .on(fetchCharacterFx.doneData, (state, characters) => ({
        ...state,
        info: characters.result[0].properties,
    }))
    .on(fetchHomeFx.doneData, (state, home) => ({
        ...state, home: home.result.properties.name
    }))

fetchCharacterFx.doneData.watch((film) => {
    if (film.result.length != 0) {
        fetchHomeFx(film.result[0].properties.homeworld)
    }
});
