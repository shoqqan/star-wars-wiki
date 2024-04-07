import {createEffect, createStore} from 'effector';

export const fetchPlanetFx = createEffect(async (id: string) => {
    const url = `https://swapi.dev/api/planets/?search=${id}`;
    const req = await fetch(url);
    return req.json();
});

export const fetchFilmsFx = createEffect(async (films: string[]) => {
    const promises = films.map(url => fetch(url).then(res => res.json()));
    console.log(promises)
    return Promise.all(promises);
});

export const fetchResidentsFx = createEffect(async (residents: string[]) => {
    const promises = residents.map(url => fetch(url).then(res => res.json()));
    return Promise.all(promises);
});

export const $searchedPlanet = createStore({info: {}, films: [], residents: []})
    .on(fetchPlanetFx.doneData, (state, film) => ({
        ...state,
        info: film.results[0],
        // Note that we don't call fetchCharacters here. It's a side effect that should be handled separately.
    }))
    // Handle the completion of character fetching.
    .on(fetchFilmsFx.doneData, (state, films) => ({
        ...state,
        films: films.map(el => el.title),
    }))
    .on(fetchResidentsFx.doneData, (state, residents) => ({
        ...state,
        residents: residents.map(el => el.name),
    }))


// When the film fetching is done, trigger the character fetching.
fetchPlanetFx.doneData.watch((film) => {
    if (film.results.length > 0) {
        fetchFilmsFx(film.results[0].films);
        fetchResidentsFx(film.results[0].residents);
    }
});
