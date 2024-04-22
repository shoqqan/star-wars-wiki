import {createEffect, createStore} from 'effector';

export const fetchFilmFx = createEffect(async (id: string) => {
    const url = `https://www.swapi.tech/api/films/?name=${id}`;
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
        info: film.result[0].properties,
        // Note that we don't call fetchCharacters here. It's a side effect that should be handled separately.
    }))
    // Handle the completion of character fetching.
    .on(fetchCharactersFx.doneData, (state, characters) => ({
        ...state,
        characters: characters.map(el => el.result.properties.name),
    }))
    .on(fetchPlanetsFx.doneData, (state, planets) => ({
        ...state,
        planets: planets.map(el => el.result.properties.name),
    }))
    .on(fetchStarshipsFx.doneData, (state, starships) => ({
        ...state,
        starships: starships.map(el => el.result.properties.name),
    }))

// When the film fetching is done, trigger the character fetching.
fetchFilmFx.doneData.watch((film) => {
    if (film.result.length > 0) {
        fetchCharactersFx(film.result[0].properties.characters);
        fetchPlanetsFx(film.result[0].properties.planets);
        fetchStarshipsFx(film.result[0].properties.starships);
    }
});
