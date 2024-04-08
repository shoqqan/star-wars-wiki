import {useUnit} from "effector-react";
import {$planets, fetchPlanetsFx} from "./model.ts";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

export const Planets = () => {
    const planets = useUnit($planets)
    const navigate = useNavigate()
    useEffect(() => {
        fetchPlanetsFx()
    }, [])
    return (
        <div className="flex flex-wrap gap-5 p-10 justify-center">
            {planets.map((el) => (
                <div
                    className={'w-52 h-80 flex flex-col justify-center gap-5 border border-gray-600 transition-all p-4 rounded-lg shadow-md relative cursor-pointer hover:border-green-500'}
                    onClick={() => {
                        navigate(`/planets_info/${el.name}`)
                    }}
                >

                    <h2 className={'font-semibold text-lg'}><span className={'font-bold'}>{el.name}</span></h2>
                    <p className={'text-sm text-gray-100'}>Diameter: <span
                        className={'font-bold text-yellow-400'}>{el.diameter}</span></p>
                    <p className={'text-sm text-gray-100'}>Population: <span
                        className={'font-bold text-yellow-400'}>{el.population}</span></p>
                    <p className={"text-sm text-gray-100"}>Climate: <span
                        className={'font-bold text-yellow-400'}>{el.climate}</span></p>
                </div>
            ))}
        </div>
    );
};

