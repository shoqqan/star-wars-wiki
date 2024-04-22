import {createEffect, createStore} from "effector";

export const fetchStarshipsFx = createEffect(async () => {
    const url = `https://www.swapi.tech/api/starships`;
    const req = await fetch(url);
    return req.json();
})
const fetchStarshipsUrlFx = createEffect(async (starships: any[]) => {
    const promises = starships.map(starship => fetch(starship.url).then(res => res.json()));
    return Promise.all(promises);
})
export const $starships = createStore([])
    .on(fetchStarshipsUrlFx.doneData, (_, starships) => starships.map(starship => starship.result))


fetchStarshipsFx.doneData.watch((starships) => {
    fetchStarshipsUrlFx(starships.results)
})
