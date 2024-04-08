import {useUnit} from "effector-react";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {$starships, fetchStarshipsFx} from "./model.ts";

export const Starships = () => {
    const starships = useUnit($starships)
    const navigate = useNavigate()
    useEffect(() => {
        fetchStarshipsFx()
    }, [])
    return (
        <div className="flex flex-wrap gap-5 p-10 justify-center">
            {starships.map((el) => (
                <div
                    onClick={() => navigate(`/starships_info/${el.name}`)}
                    className={'w-52 h-80 flex flex-col justify-center gap-5 border border-gray-600 transition-all p-4 rounded-lg shadow-md relative cursor-pointer hover:border-green-500'}>
                    <h2 className={'font-semibold text-lg'}><span className={'font-bold'}>{el.name}</span></h2>
                    <p className={'text-sm text-gray-100'}>Cost: <span
                        className={'font-bold text-yellow-400'}>{el.cost_in_credits}</span></p>
                    <p className={'text-sm text-gray-100'}>Max Speed: <span
                        className={'font-bold text-yellow-400'}>{el.max_atmosphering_speed}</span></p>
                    <p className={"text-sm text-gray-100"}>Max Passengers: <span
                        className={'font-bold text-yellow-400'}>{el.passengers}</span></p>
                    <p className={"text-sm text-gray-100"}>Class: <span
                        className={'font-bold text-yellow-400'}>{el.starship_class}</span></p>
                </div>
            ))}
        </div>
    );
};

