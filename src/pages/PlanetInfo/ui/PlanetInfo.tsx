import React, {useEffect, useState} from 'react';
import {useUnit} from "effector-react";
import {$searchedPlanet, fetchPlanetFx} from "../model.ts";
import {useNavigate, useParams} from "react-router-dom";
import {ROUTES} from "../../../models/routes.ts";

export const PlanetInfo = () => {
    const params = useParams()
    const planet = useUnit($searchedPlanet)
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        setIsLoading(true)
        fetchPlanetFx(params.id).finally(() => {
            setIsLoading(false)
        })
    }, [])
    return (
        <div className="w-screen h-screen overflow-y-scroll flex flex-col gap-y-3 bg-black text-yellow-400">
            <div className="flex justify-between px-4 py-4 border-b border-yellow-400 bg-black">
                <h1 className="font-bold text-2xl text-yellow-400 cursor-pointer"
                    onClick={() => navigate(`/home/${ROUTES.PLANETS}`)}>Star Wars Wiki</h1>
            </div>
            <div className="flex flex-wrap gap-5 p-10">
                {isLoading &&
                    <div
                        className={'w-full h-80 flex flex-col  items-center justify-center border border-gray-600 transition-all p-4 rounded-lg shadow-md relative cursor-pointer hover:border-green-500'}>
                        <div
                            className="w-12 h-12 rounded-full animate-spin border-8 border-dashed border-green-500 border-t-transparent"></div>
                    </div>
                }
                {!isLoading &&
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
                        <p className={'text-sm text-gray-100'}>Gravity: <span
                            className={'font-bold text-yellow-400'}>{planet.info.gravity}</span></p>
                        <p className={"text-sm text-gray-100"}>Orbital period: <span
                            className={'font-bold text-yellow-400'}>{planet.info.orbital_period}</span></p>
                        <p className={"text-sm text-gray-100"}>Rotation period: <span
                            className={'font-bold text-yellow-400'}>{planet.info.rotation_period}</span></p>
                        <p className={"text-sm text-gray-100"}>Surface Water: <span
                            className={'font-bold text-yellow-400'}>{planet.info.surface_water}</span></p>
                        <p className={"text-sm text-gray-100"}>Terrain: <span
                            className={'font-bold text-yellow-400'}>{planet.info.terrain}</span></p>


                    </div>
                }
                {!planet.info &&
                    <div>Planet not found :(</div>
                }
            </div>
        </div>
    );
};

