import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useUnit} from "effector-react";
import {Header} from "../../../components/Header/Header.tsx";
import {$starshipInfo, fetchStarshipFx} from "./model.ts";

export const StarshipsInfo = () => {
    const params = useParams()
    const starship = useUnit($starshipInfo)
    const navigate = useNavigate()
    console.log(starship)
    useEffect(() => {
        fetchStarshipFx(params.id)
    }, [])
    return (
        <div className="w-screen h-screen overflow-y-scroll flex flex-col gap-y-3 bg-black text-yellow-400">
            <Header/>
            <div className="flex flex-wrap gap-5 p-10">
                {starship.info &&
                    <div
                        className={'w-full h-fit flex flex-col justify-center gap-5 border border-gray-600 transition-all p-4 rounded-lg shadow-md relative cursor-pointer hover:border-green-500'}>
                        <h2 className={'font-semibold text-lg'}><span
                            className={'font-bold'}>{starship.info.name}</span></h2>
                        <p className={'text-sm text-gray-100'}>Cost: <span
                            className={'font-bold text-yellow-400'}>{starship.info.cost_in_credits}</span></p>
                        <p className={'text-sm text-gray-100'}>Length: <span
                            className={'font-bold text-yellow-400'}>{starship.info.length}</span></p>
                        <p className={'text-sm text-gray-100'}>Manufacturer: <span
                            className={'font-bold text-yellow-400'}>{starship.info.manufacturer}</span></p>
                        <p className={"text-sm text-gray-100"}>Model: <span
                            className={'font-bold text-yellow-400'}>{starship.info.model}</span></p>
                        <p className={"text-sm text-gray-100"}>Passenger: <span
                            className={'font-bold text-yellow-400'}>{starship.info.passengers}</span></p>
                        {starship.films.length > 0 &&
                            <p className={"text-sm text-gray-100"}

                            >Films: <span
                                className={'font-bold text-yellow-400'}>
                            {starship.films.map((el) => (
                                <span onClick={() => {
                                    navigate(`/film_info/${el}`)
                                }} key={el} className={"underline transition-all hover:text-emerald-500"}>{el}, </span>
                            ))}
                        </span></p>

                        }
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

