import {createEffect, createStore} from "effector";

export const fetchPeopleFx = createEffect(async () => {
    const url = `https://www.swapi.tech/api/people`;
    const req = await fetch(url);
    return req.json();
})
const fetchPeopleUrlFx = createEffect(async (people: any[]) => {
    const promises = people.map(character => fetch(character.url).then(res => res.json()));
    return Promise.all(promises);
})
export const $people = createStore([])
    .on(fetchPeopleUrlFx.doneData, (_, people) => {
        return people.map(character => character.result)
    })

fetchPeopleFx.doneData.watch((people) => {
    fetchPeopleUrlFx(people.results)
})