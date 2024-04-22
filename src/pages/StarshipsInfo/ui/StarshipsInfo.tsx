import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useUnit} from "effector-react";
import {$starshipInfo, fetchStarshipFx} from "../model.ts";
import {ROUTES} from "../../../models/routes.ts";

export const StarshipsInfo = () => {
    const params = useParams()
    const starship = useUnit($starshipInfo)
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        fetchStarshipFx(params.id).finally(() => {
            setIsLoading(false)
        })
    }, [])
    return (
        <div className="w-screen h-screen overflow-y-scroll flex flex-col gap-y-3 bg-black text-yellow-400">
            <div className="flex justify-between px-4 py-4 border-b border-yellow-400 bg-black">
                <h1 className="font-bold text-2xl text-yellow-400 cursor-pointer"
                    onClick={() => navigate(`/home/${ROUTES.STARSHIPS}`)}>Star Wars Wiki</h1>
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
                        <h2 className={'font-semibold text-lg'}><span
                            className={'font-bold'}>{starship.info.name}</span></h2>
                        <p className={'text-sm text-gray-100'}>Cost: <span
                            className={'font-bold text-yellow-400'}>{starship.info.cost_in_credits}</span></p>
                        <p className={'text-sm text-gray-100'}>Cargo Capacity: <span
                            className={'font-bold text-yellow-400'}>{starship.info.cargo_capacity}</span></p>
                        <p className={'text-sm text-gray-100'}>HyperDrive Rating: <span
                            className={'font-bold text-yellow-400'}>{starship.info.hyperdrive_rating}</span></p>
                        <p className={'text-sm text-gray-100'}>Length: <span
                            className={'font-bold text-yellow-400'}>{starship.info.length}</span></p>
                        <p className={'text-sm text-gray-100'}>Atmosphering Speed: <span
                            className={'font-bold text-yellow-400'}>{starship.info.max_atmosphering_speed}</span></p>
                        <p className={'text-sm text-gray-100'}>Manufacturer: <span
                            className={'font-bold text-yellow-400'}>{starship.info.manufacturer}</span></p>
                        <p className={"text-sm text-gray-100"}>Model: <span
                            className={'font-bold text-yellow-400'}>{starship.info.model}</span></p>
                        <p className={"text-sm text-gray-100"}>Passenger: <span
                            className={'font-bold text-yellow-400'}>{starship.info.passengers}</span></p>

                        {starship.pilots.length > 0 &&
                            <p className={"text-sm text-gray-100"}>Pilots: <span
                                className={'font-bold text-yellow-400'}>
                            {starship.pilots.map((el) => (
                                <span key={el} onClick={() => navigate(`/people_info/${el}`)}
                                      className={"underline transition-all hover:text-emerald-500"}>{el}, </span>
                            ))}
                        </span></p>

                        }


                    </div>
                }
                {!starship.info &&
                    <div>Starship not found :(</div>
                }

            </div>
        </div>
    );
};

