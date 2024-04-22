import {useUnit} from "effector-react";
import {$planets, fetchPlanetsFx} from "../model.ts";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export const Planets = () => {
    const planets = useUnit($planets)
    const navigate = useNavigate()
    const [isLoading,setIsLoading] = useState(false)
    useEffect(() => {
        if (!planets.length)
            setIsLoading(true)
            fetchPlanetsFx().finally(()=>{
                setIsLoading(false)
            })
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
            {planets.map((el) => (
                <div
                    key={el.uid}
                    className={'w-52 h-80 flex flex-col justify-center gap-5 border border-gray-600 transition-all p-4 rounded-lg shadow-md relative cursor-pointer hover:border-green-500'}
                    onClick={() => {
                        navigate(`/planets_info/${el.properties.name}`)
                    }}
                >

                    <h2 className={'font-semibold text-lg'}><span className={'font-bold'}>{el.properties.name}</span>
                    </h2>
                    <p className={'text-sm text-gray-100'}>Diameter: <span
                        className={'font-bold text-yellow-400'}>{el.properties.diameter}</span></p>
                    <p className={'text-sm text-gray-100'}>Population: <span
                        className={'font-bold text-yellow-400'}>{el.properties.population}</span></p>
                    <p className={"text-sm text-gray-100"}>Climate: <span
                        className={'font-bold text-yellow-400'}>{el.properties.climate}</span></p>
                </div>
            ))}
        </div>
    );
};

