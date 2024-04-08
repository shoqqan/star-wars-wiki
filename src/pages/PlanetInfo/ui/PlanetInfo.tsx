import React, {useEffect} from 'react';
import {useUnit} from "effector-react";
import {$searchedPlanet, fetchPlanetFx} from "../model.ts";
import {useNavigate, useParams} from "react-router-dom";
import {ROUTES} from "../../../models/routes.ts";

export const PlanetInfo = () => {
    const params = useParams()
    const planet = useUnit($searchedPlanet)
    const navigate = useNavigate()
    useEffect(() => {
        fetchPlanetFx(params.id)
    }, [])
    return (
        <div className="w-screen h-screen overflow-y-scroll flex flex-col gap-y-3 bg-black text-yellow-400">
            <div className="flex justify-between px-4 py-4 border-b border-yellow-400 bg-black">
                <h1 className="font-bold text-2xl text-yellow-400 cursor-pointer"
                    onClick={() => navigate(`/home/${ROUTES.PLANETS}`)}>Star Wars Wiki</h1>
            </div>
            <div className="flex flex-wrap gap-5 p-10">
                {planet.info &&
                    <div
                        className={'w-full h-fit flex flex-col justify-center gap-5 border border-gray-600 transition-all p-4 rounded-lg shadow-md relative cursor-pointer hover:border-green-500'}>
                        <h2 className={'font-semibold text-lg'}><span className={'font-bold'}>{planet.info.name}</span>
                        </h2>
                        <p className={'text-sm text-gray-100'}>Diameter: <span
                            className={'font-bold text-yellow-400'}>{planet.info.diameter}</span></p>
                        <p className={'text-sm text-gray-100'}>Climate: <span
                            className={'font-bold text-yellow-400'}>{planet.info.climate}</span></p>
                        <p className={'text-sm text-gray-100'}>Population: <span
                            className={'font-bold text-yellow-400'}>{planet.info.population}</span></p>
                        <p className={"text-sm text-gray-100"}>Orbital period: <span
                            className={'font-bold text-yellow-400'}>{planet.info.orbital_period}</span></p>
                        <p className={"text-sm text-gray-100"}>Terrain: <span
                            className={'font-bold text-yellow-400'}>{planet.info.terrain}</span></p>
                        {planet.films.length > 0 &&
                            <p className={"text-sm text-gray-100"}

                            >Films: <span
                                className={'font-bold text-yellow-400'}>
                            {planet.films.map((el) => (
                                <span onClick={() => {
                                    navigate(`/film_info/${el}`)
                                }} key={el} className={"underline transition-all hover:text-emerald-500"}>{el}, </span>
                            ))}
                        </span></p>

                        }
                        {planet.residents.length > 0 &&
                            <p className={"text-sm text-gray-100"}>Residents: <span
                                className={'font-bold text-yellow-400'}>
                            {planet.residents.map((el) => (
                                <span key={el} onClick={() => navigate(`/people_info/${el}`)}
                                      className={"underline transition-all hover:text-emerald-500"}>{el}, </span>
                            ))}
                        </span></p>

                        }


                    </div>
                }
                {!planet.info &&
                    <div>Planet not found :(</div>
                }
            </div>
        </div>
    );
};

