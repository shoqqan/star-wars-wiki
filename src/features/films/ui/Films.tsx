import {useEffect} from "react";
import {$films, fetchFilmsFx} from "../model.ts";
import {useUnit} from "effector-react";
import {useNavigate} from "react-router-dom";

export const Films = () => {
    const films = useUnit($films)
    const navigate = useNavigate()
    useEffect(() => {
        fetchFilmsFx()
    }, [])
    return (
        <div className="flex flex-wrap gap-5 p-10 justify-center">
            {films.map((el) => (
                <div
                    key={el.episode_id}
                    className={'w-52 h-80 flex flex-col justify-center gap-5 border border-gray-600 transition-all p-4 rounded-lg shadow-md relative cursor-pointer hover:border-green-500'}
                    onClick={() => {
                        navigate(`/film_info/${el.title}`)
                    }}
                >
                    <h2 className={'font-semibold text-lg'}><span className={'font-bold'}>{el.title}</span></h2>
                    <p className={'text-sm text-gray-100'}>Episode: <span
                        className={'font-bold text-yellow-400'}>{el.episode_id}</span></p>
                    <p className={'text-sm text-gray-100'}>Directed by: <span
                        className={'font-bold text-yellow-400'}>{el.director}</span></p>
                    <p className={"text-sm text-gray-100"}>Producers: <span
                        className={'font-bold text-yellow-400'}>{el.producer}</span></p>
                </div>
            ))}
        </div>
    );
};

