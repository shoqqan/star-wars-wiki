import {useUnit} from "effector-react";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {$starships, fetchStarshipsFx} from "../model.ts";

export const Starships = () => {
    const starships = useUnit($starships)
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        if (!starships.length)
            setIsLoading(true)
        fetchStarshipsFx().finally(() => {
            setIsLoading(false)
        })
    }, [])
    if (isLoading) {
        return <div className={'flex flex-wrap gap-5 p-10 justify-center'}>
            <div
                className={'w-52 h-80 flex flex-col  items-center justify-center border border-gray-600 transition-all p-4 rounded-lg shadow-md relative cursor-pointer hover:border-green-500'}>
                <div
                    className="w-12 h-12 rounded-full animate-spin border-8 border-dashed border-green-500 border-t-transparent"></div>
            </div>
            <div
                className={'w-52 h-80 flex flex-col  items-center justify-center border border-gray-600 transition-all p-4 rounded-lg shadow-md relative cursor-pointer hover:border-green-500'}>
                <div
                    className="w-12 h-12 rounded-full animate-spin border-8 border-dashed border-green-500 border-t-transparent"></div>
            </div>
            <div
                className={'w-52 h-80 flex flex-col  items-center justify-center border border-gray-600 transition-all p-4 rounded-lg shadow-md relative cursor-pointer hover:border-green-500'}>
                <div
                    className="w-12 h-12 rounded-full animate-spin border-8 border-dashed border-green-500 border-t-transparent"></div>
            </div>
            <div
                className={'w-52 h-80 flex flex-col  items-center justify-center border border-gray-600 transition-all p-4 rounded-lg shadow-md relative cursor-pointer hover:border-green-500'}>
                <div
                    className="w-12 h-12 rounded-full animate-spin border-8 border-dashed border-green-500 border-t-transparent"></div>
            </div>
            <div
                className={'w-52 h-80 flex flex-col  items-center justify-center border border-gray-600 transition-all p-4 rounded-lg shadow-md relative cursor-pointer hover:border-green-500'}>
                <div
                    className="w-12 h-12 rounded-full animate-spin border-8 border-dashed border-green-500 border-t-transparent"></div>
            </div>
        </div>
    }
    return (
        <div className="flex flex-wrap gap-5 p-10 justify-center">
            {starships.map((el) => (
                <div
                    key={el.uid}
                    onClick={() => navigate(`/starships_info/${el.properties.name}`)}
                    className={'w-52 h-80 flex flex-col justify-center gap-5 border border-gray-600 transition-all p-4 rounded-lg shadow-md relative cursor-pointer hover:border-green-500'}>
                    <h2 className={'font-semibold text-lg'}><span className={'font-bold'}>{el.properties.name}</span>
                    </h2>
                    <p className={'text-sm text-gray-100'}>Cost: <span
                        className={'font-bold text-yellow-400'}>{el.properties.cost_in_credits}</span></p>
                    <p className={'text-sm text-gray-100'}>Max Speed: <span
                        className={'font-bold text-yellow-400'}>{el.properties.max_atmosphering_speed}</span></p>
                    <p className={"text-sm text-gray-100"}>Max Passengers: <span
                        className={'font-bold text-yellow-400'}>{el.properties.passengers}</span></p>
                    <p className={"text-sm text-gray-100"}>Class: <span
                        className={'font-bold text-yellow-400'}>{el.properties.starship_class}</span></p>
                </div>
            ))}
        </div>
    );
};

