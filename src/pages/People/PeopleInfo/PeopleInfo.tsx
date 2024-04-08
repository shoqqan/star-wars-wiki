import React, {useEffect} from 'react';
import {useUnit} from "effector-react";
import {useNavigate, useParams} from "react-router-dom";
import {$characterInfo, fetchCharacterFx} from "./model.ts";
import {ROUTES} from "../../../models/routes.ts";

export const PeopleInfo = () => {
    const params = useParams()
    const character = useUnit($characterInfo)
    const navigate = useNavigate()
    useEffect(() => {
        fetchCharacterFx(params.id)
    }, [])
    return (
        <div className="w-screen h-screen overflow-y-scroll flex flex-col gap-y-3 bg-black text-yellow-400">
            <div className="flex justify-between px-4 py-4 border-b border-yellow-400 bg-black">
                <h1 className="font-bold text-2xl text-yellow-400 cursor-pointer"
                    onClick={() => navigate(`/home/${ROUTES.PEOPLE}`)}>Star Wars Wiki</h1>

            </div>
            <div className="flex flex-wrap gap-5 p-10">
                {character.info &&
                    <div
                        className={'w-full h-fit flex flex-col justify-center gap-5 border border-gray-600 transition-all p-4 rounded-lg shadow-md relative cursor-pointer hover:border-green-500'}>
                        <h2 className={'font-semibold text-lg'}><span
                            className={'font-bold'}>{character.info.name}</span>
                        </h2>
                        <p className={'text-sm text-gray-100'}>Homeworld: <span
                            className={'font-bold text-yellow-400 underline transition-all hover:text-emerald-500'}
                            onClick={() => navigate(`/planets_info/${character.home}`)}>{character.home}</span></p>
                        <p className={'text-sm text-gray-100'}>Gender: <span
                            className={'font-bold text-yellow-400'}>{character.info.gender}</span></p>
                        <p className={"text-sm text-gray-100"}>Height: <span
                            className={'font-bold text-yellow-400'}>{character.info.height} sm</span></p>
                        <p className={"text-sm text-gray-100"}>Mass: <span
                            className={'font-bold text-yellow-400'}>{character.info.mass} kg</span></p>
                        {character.films.length > 0 &&
                            <p className={"text-sm text-gray-100"}>Films: <span
                                className={'font-bold text-yellow-400'}>
                            {character.films.map((el) => (
                                <span key={el}
                                      onClick={() => navigate(`/film_info/${el}`)}
                                      className={"underline transition-all hover:text-emerald-500"}>{el}, </span>
                            ))}
                        </span></p>

                        }
                        {character.species.length > 0 &&
                            <p className={"text-sm text-gray-100"}>Species: <span
                                className={'font-bold text-yellow-400'}>
                            {character.species.map((el) => (
                                <span onClick={() => {
                                }} key={el}>{el}, </span>
                            ))}
                        </span></p>

                        }
                        {character.starships.length > 0 &&
                            <p className={"text-sm text-gray-100"}>Starships: <span
                                className={'font-bold text-yellow-400'}>
                            {character.starships.map((el) => (
                                <span key={el}
                                      onClick={() => navigate(`/starships_info/${el}`)}
                                      className={"underline transition-all hover:text-emerald-500"}>{el}, </span>
                            ))}
                        </span></p>

                        }

                    </div>

                }
                {!character.info &&
                <div>Character not found :(</div>
                }
            </div>
        </div>
    );
};

