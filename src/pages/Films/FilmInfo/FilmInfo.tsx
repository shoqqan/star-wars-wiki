import React, {useEffect} from 'react';
import {useUnit} from "effector-react";
import {$searchedFilm, fetchFilmFx} from "./model.ts";
import {useNavigate, useParams} from "react-router-dom";
import {ROUTES} from "../../../models/routes.ts";

export const FilmInfo = () => {
    const params = useParams()
    const film = useUnit($searchedFilm)
    const navigate = useNavigate()
    useEffect(() => {
        fetchFilmFx(params.id)
    }, [])
    return (
        <div className="w-screen h-screen overflow-y-scroll flex flex-col gap-y-3 bg-black text-yellow-400">
            <div className="flex justify-between px-4 py-4 border-b border-yellow-400 bg-black">
                <h1 className="font-bold text-2xl text-yellow-400 cursor-pointer"
                    onClick={() => navigate(`/home/${ROUTES.FILMS}`)}>Star Wars Wiki</h1>
            </div>
            <div className="flex flex-wrap gap-5 p-10">
                {film.info &&
                    <div
                        className={'w-full h-fit flex flex-col justify-center gap-5 border border-gray-600 transition-all p-4 rounded-lg shadow-md relative cursor-pointer hover:border-green-500'}>
                        <h2 className={'font-semibold text-lg'}><span className={'font-bold'}>{film.info.title}</span>
                        </h2>
                        <p>{film.info.opening_crawl}</p>
                        <p className={'text-sm text-gray-100'}>Episode: <span
                            className={'font-bold text-yellow-400'}>{film.info.episode_id}</span></p>
                        <p className={'text-sm text-gray-100'}>Directed by: <span
                            className={'font-bold text-yellow-400'}>{film.info.director}</span></p>
                        <p className={"text-sm text-gray-100"}>Producers: <span
                            className={'font-bold text-yellow-400'}>{film.info.producer}</span></p>
                        <p className={"text-sm text-gray-100"}>Release: <span
                            className={'font-bold text-yellow-400'}>{film.info.release_date}</span></p>
                        {film.characters.length > 0 &&
                            <p className={"text-sm text-gray-100"}>Characters: <span
                                className={'font-bold text-yellow-400'}>
                            {film.characters.map((el) => (
                                <span key={el}
                                      onClick={() => navigate(`/people_info/${el}`)}
                                      className={"underline transition-all hover:text-emerald-500"}>{el}, </span>
                            ))}
                        </span></p>

                        }
                        {film.planets.length > 0 &&
                            <p className={"text-sm text-gray-100"}>Planets: <span
                                className={'font-bold text-yellow-400'}>
                            {film.planets.map((el) => (
                                <span onClick={() => {
                                    navigate(`/planets_info/${el}`)
                                }} key={el} className={"underline transition-all hover:text-emerald-500"}>{el}, </span>
                            ))}
                        </span></p>

                        }
                        {film.starships.length > 0 &&
                            <p className={"text-sm text-gray-100"}>Starships: <span
                                className={'font-bold text-yellow-400'}>
                            {film.starships.map((el) => (
                                <span onClick={() => navigate(`/starships_info/${el}`)} key={el}
                                      className={"underline transition-all hover:text-emerald-500"}>{el}, </span>
                            ))}
                        </span></p>

                        }

                    </div>
                }
                {!film.info &&
                    <div>Film not found :(</div>
                }
            </div>
        </div>
    );
};

