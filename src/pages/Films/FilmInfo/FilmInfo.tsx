import React, {useEffect} from 'react';
import {Header} from "../../../components/Header/Header.tsx";
import {useUnit} from "effector-react";
import {$searchedFilm, fetchFilmFx} from "./model.ts";
import {useParams} from "react-router-dom";

export const FilmInfo = () => {
    const params = useParams()
    const film = useUnit($searchedFilm)
    console.log(film)
    useEffect(() => {
        fetchFilmFx(params.id)
    }, [])
    return (
        <div className="w-screen h-screen overflow-y-scroll flex flex-col gap-y-3 bg-black text-yellow-400">
            <Header/>
            <div className="flex flex-wrap gap-5 p-10">
                <div
                    className={'w-full h-fit flex flex-col justify-center gap-5 border border-gray-600 transition-all p-4 rounded-lg shadow-md relative cursor-pointer hover:border-green-500'}>
                    <h2 className={'font-semibold text-lg'}><span className={'font-bold'}>{film.info.title}</span></h2>
                    <p>{film.info.opening_crawl}</p>
                    <p className={'text-sm text-gray-100'}>Episode: <span
                        className={'font-bold text-yellow-400'}>{film.info.episode_id}</span></p>
                    <p className={'text-sm text-gray-100'}>Directed by: <span
                        className={'font-bold text-yellow-400'}>{film.info.director}</span></p>
                    <p className={"text-sm text-gray-100"}>Producers: <span
                        className={'font-bold text-yellow-400'}>{film.info.producer}</span></p>
                    <p className={"text-sm text-gray-100"}>Release: <span
                        className={'font-bold text-yellow-400'}>{film.info.release_date}</span></p>
                    {film.characters.length>0 &&
                        <p className={"text-sm text-gray-100"}>Characters: <span
                            className={'font-bold text-yellow-400'}>
                            {film.characters.map((el)=>(
                                <span key={el} className={"hover:underline"}>{el}, </span>
                            ))}
                        </span></p>

                    }
                    {film.planets.length>0 &&
                        <p className={"text-sm text-gray-100"}>Planets: <span
                            className={'font-bold text-yellow-400'}>
                            {film.planets.map((el)=>(
                                <span key={el} className={"hover:underline"}>{el}, </span>
                            ))}
                        </span></p>

                    }
                    {film.starships.length>0 &&
                        <p className={"text-sm text-gray-100"}>Starships: <span
                            className={'font-bold text-yellow-400'}>
                            {film.starships.map((el)=>(
                                <span key={el} className={"hover:underline"}>{el}, </span>
                            ))}
                        </span></p>

                    }

                </div>
            </div>
        </div>
    );
};

