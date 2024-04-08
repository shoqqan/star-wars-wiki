import {createEffect, createStore} from "effector";

export const fetchPeopleFx = createEffect(async () => {
    const url = `https://swapi.dev/api/people`;
    const req = await fetch(url);
    return req.json();
})
export const $people = createStore([])
    .on(fetchPeopleFx.doneData, (_, people) => people.results)