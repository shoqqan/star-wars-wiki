import {createEffect, createStore} from 'effector';

export const fetchStarshipFx = createEffect(async (id: string) => {
    const url = `https://www.swapi.tech/api/starships/?name=${id}`;
    const req = await fetch(url);
    return req.json();
});

const fetchPilotsFx = createEffect(async (pilots: string[]) => {
    const promises = pilots.map(url => fetch(url).then(res => res.json()));
    return Promise.all(promises);
});

export const $starshipInfo = createStore({info: {}, pilots: []})
    .on(fetchStarshipFx.doneData, (state, film) => ({
        ...state,
        info: film.result[0].properties,
        // Note that we don't call fetchCharacters here. It's a side effect that should be handled separately.
    }))

    .on(fetchPilotsFx.doneData, (state, pilots) => ({
        ...state,
        pilots: pilots.map(el => el.result.properties.name),
    }))


// When the film fetching is done, trigger the character fetching.
fetchStarshipFx.doneData.watch((film) => {
    console.log(film)
    if (film.result.length > 0) {
        if (film.result[0].properties.pilots.length)
            fetchPilotsFx(film.result[0].properties.pilots);
    }
});

