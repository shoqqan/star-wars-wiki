import {createEffect, createStore} from "effector";

export const fetchPlanetsFx = createEffect(async () => {
    const url = `https://www.swapi.tech/api/planets`;
    const req = await fetch(url);
    return req.json();
})
const fetchPlanetsInformationFx = createEffect(async (planets: any[]) => {
    const promises = planets.map(planet => fetch(planet.url).then(res => res.json()));
    return Promise.all(promises);
})
export const $planets = createStore([])
    .on(fetchPlanetsInformationFx.doneData, (_, planets) => planets.map(planetInfo => planetInfo.result))


fetchPlanetsFx.doneData.watch((planets) => {
    fetchPlanetsInformationFx(planets.results)
})