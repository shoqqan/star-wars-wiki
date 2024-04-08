import {createEffect, createStore} from 'effector';

export const fetchStarshipFx = createEffect(async (id: string) => {
    const url = `https://swapi.dev/api/starships/?search=${id}`;
    const req = await fetch(url);
    return req.json();
});

export const fetchFilmsFx = createEffect(async (films: string[]) => {
    const promises = films.map(url => fetch(url).then(res => res.json()));
    console.log(promises)
    return Promise.all(promises);
});

export const fetchPilotsFx = createEffect(async (pilots: string[]) => {
    const promises = pilots.map(url => fetch(url).then(res => res.json()));
    return Promise.all(promises);
});

export const $starshipInfo = createStore({info: {}, films: [], pilots: []})
    .on(fetchStarshipFx.doneData, (state, film) => ({
        ...state,
        info: film.results[0],
        // Note that we don't call fetchCharacters here. It's a side effect that should be handled separately.
    }))
    // Handle the completion of character fetching.
    .on(fetchFilmsFx.doneData, (state, films) => ({
        ...state,
        films: films.map(el => el.title),
    }))
    .on(fetchPilotsFx.doneData, (state, pilots) => ({
        ...state,
        pilots: pilots.map(el => el.name),
    }))


// When the film fetching is done, trigger the character fetching.
fetchStarshipFx.doneData.watch((film) => {
    if (film.results.length > 0) {
        fetchFilmsFx(film.results[0].films);
        fetchPilotsFx(film.results[0].pilots);
    }
});
