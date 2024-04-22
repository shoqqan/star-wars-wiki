import {useEffect, useState} from "react";
import {$films, fetchFilmsFx} from "../model.ts";
import {useUnit} from "effector-react";
import {useNavigate} from "react-router-dom";

export const Films = () => {
    const films = useUnit($films)
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        if (!films.length) {
            setIsLoading(true)
            fetchFilmsFx().finally(() => {
                setIsLoading(false)
            })
        }
    }, [])
    if (isLoading) {
        return <div className={'flex flex-wrap gap-5 p-10 justify-center'}>
            <div className={'w-52 h-80 flex flex-col  items-center justify-center border border-gray-600 transition-all p-4 rounded-lg shadow-md relative cursor-pointer hover:border-green-500'}>
                <div className="w-12 h-12 rounded-full animate-spin border-8 border-dashed border-green-500 border-t-transparent"></div>
            </div><div className={'w-52 h-80 flex flex-col  items-center justify-center border border-gray-600 transition-all p-4 rounded-lg shadow-md relative cursor-pointer hover:border-green-500'}>
                <div className="w-12 h-12 rounded-full animate-spin border-8 border-dashed border-green-500 border-t-transparent"></div>
            </div><div className={'w-52 h-80 flex flex-col  items-center justify-center border border-gray-600 transition-all p-4 rounded-lg shadow-md relative cursor-pointer hover:border-green-500'}>
                <div className="w-12 h-12 rounded-full animate-spin border-8 border-dashed border-green-500 border-t-transparent"></div>
            </div><div className={'w-52 h-80 flex flex-col  items-center justify-center border border-gray-600 transition-all p-4 rounded-lg shadow-md relative cursor-pointer hover:border-green-500'}>
                <div className="w-12 h-12 rounded-full animate-spin border-8 border-dashed border-green-500 border-t-transparent"></div>
            </div><div className={'w-52 h-80 flex flex-col  items-center justify-center border border-gray-600 transition-all p-4 rounded-lg shadow-md relative cursor-pointer hover:border-green-500'}>
                <div className="w-12 h-12 rounded-full animate-spin border-8 border-dashed border-green-500 border-t-transparent"></div>
            </div>
        </div>
    }
    return (
        <div className="flex flex-wrap gap-5 p-10 justify-center">
            {films.map((el) => (
                <div
                    key={el.properties.episode_id}
                    className={'w-52 h-80 flex flex-col justify-center gap-5 border border-gray-600 transition-all p-4 rounded-lg shadow-md relative cursor-pointer hover:border-green-500'}
                    onClick={() => {
                        navigate(`/film_info/${el.properties.title}`)
                    }}
                >
                    <h2 className={'font-semibold text-lg'}><span
                        className={'font-bold'}>{el.properties.title}</span>
                    </h2>
                    <p className={'text-sm text-gray-100'}>Episode: <span
                        className={'font-bold text-yellow-400'}>{el.properties.episode_id}</span></p>
                    <p className={'text-sm text-gray-100'}>Directed by: <span
                        className={'font-bold text-yellow-400'}>{el.properties.director}</span></p>
                    <p className={"text-sm text-gray-100"}>Producers: <span
                        className={'font-bold text-yellow-400'}>{el.properties.producer}</span></p>
                </div>
            ))}

        </div>
    );
};

