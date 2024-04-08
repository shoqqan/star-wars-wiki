import {createEffect, createStore} from 'effector';

export const fetchCharacterFx = createEffect(async (id: string) => {
    const url = `https://swapi.dev/api/people/?search=${id}`;
    const req = await fetch(url);
    return req.json();
});

const fetchSpeciesFx = createEffect(async (characters: string[]) => {
    const promises = characters.map(url => fetch(url).then(res => res.json()));
    return Promise.all(promises);
});

export const fetchHomeFx = createEffect(async (url: string) => {
    const req = await fetch(url);
    return req.json();
});

const fetchFilmsFx = createEffect(async (starships: string[]) => {
    const promises = starships.map(url => fetch(url).then(res => res.json()));
    return Promise.all(promises);
});
const fetchStarshipsFx = createEffect(async (starships: string[]) => {
    const promises = starships.map(url => fetch(url).then(res => res.json()));
    return Promise.all(promises);
});
export const $characterInfo = createStore({info: {}, films: [], home: "", species: [], starships: []})
    .on(fetchCharacterFx.doneData, (state, characters) => ({
        ...state,
        info: characters.results[0],
    }))
    .on(fetchSpeciesFx.doneData, (state, characters) => ({
        ...state,
        species: characters.map(el => el.name),
    }))
    .on(fetchStarshipsFx.doneData, (state, starships) => ({
        ...state,
        starships: starships.map(el => el.name),
    }))
    .on(fetchFilmsFx.doneData, (state, films) => ({
            ...state,
            films: films.map(el => el.title),
        })
    )
    .on(fetchHomeFx.doneData, (state, home) => ({
        ...state, home: home.name
    }))

fetchCharacterFx.doneData.watch((film) => {
    if (film.results.length > 0) {
        fetchFilmsFx(film.results[0].films);
        fetchSpeciesFx(film.results[0].species);
        fetchStarshipsFx(film.results[0].starships);
        fetchHomeFx(film.results[0].homeworld)
    }
});
