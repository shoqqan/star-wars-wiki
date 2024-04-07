import {createEffect, createStore} from 'effector';

export const fetchFilmFx = createEffect(async (id: string) => {
    const url = `https://swapi.dev/api/films/?search=${id}`;
    const req = await fetch(url);
    return req.json();
});

export const fetchCharactersFx = createEffect(async (characters: string[]) => {
    const promises = characters.map(url => fetch(url).then(res => res.json()));
    return Promise.all(promises);
});

export const fetchPlanetsFx = createEffect(async (planets: string[]) => {
    const promises = planets.map(url => fetch(url).then(res => res.json()));
    return Promise.all(promises);
});
export const fetchStarshipsFx = createEffect(async (starships: string[]) => {
    const promises = starships.map(url => fetch(url).then(res => res.json()));
    return Promise.all(promises);
});
export const $searchedFilm = createStore({info: {}, characters: [], planets: [], starships: []})
    .on(fetchFilmFx.doneData, (state, film) => ({
        ...state,
        info: film.results[0],
        // Note that we don't call fetchCharacters here. It's a side effect that should be handled separately.
    }))
    // Handle the completion of character fetching.
    .on(fetchCharactersFx.doneData, (state, characters) => ({
        ...state,
        characters: characters.map(el => el.name),
    }))
    .on(fetchPlanetsFx.doneData, (state, planets) => ({
        ...state,
        planets: planets.map(el => el.name),
    }))
    .on(fetchStarshipsFx.doneData, (state, starships) => ({
        ...state,
        starships: starships.map(el => el.name),
    }))

// When the film fetching is done, trigger the character fetching.
fetchFilmFx.doneData.watch((film) => {
    if (film.results.length > 0) {
        fetchCharactersFx(film.results[0].characters);
        fetchPlanetsFx(film.results[0].planets);
        fetchStarshipsFx(film.results[0].starships);
    }
});
