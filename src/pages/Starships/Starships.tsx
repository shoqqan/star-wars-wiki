import {Header} from "../../components/Header/Header.tsx";
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
        <div className="w-screen h-screen overflow-y-scroll flex flex-col gap-y-3 bg-black text-yellow-400">
            <Header/>
            <div className={'w-full h-[50px] flex justify-evenly'}>
                <a
                    className={'w-52 h-[50px] flex justify-center items-center border border-gray-600 shadow-md rounded-lg transition-all hover:bg-yellow-400 hover:text-black'}
                    onClick={() => {
                        navigate('/films')
                    }}
                >Films</a>
                <a
                    className={'w-52 flex justify-center items-center border border-gray-600 shadow-md rounded-lg transition-all hover:bg-yellow-400 hover:text-black'}
                    onClick={() => {
                        navigate('/planets')
                    }}
                >Planets</a>

                <a
                    className={'w-52 flex justify-center items-center border border-gray-600 shadow-md rounded-lg transition-all hover:bg-yellow-400 hover:text-black'}
                    onClick={() => {
                        navigate('/people')
                    }}

                >People</a>
                <a
                    className={'w-52 flex justify-center items-center border border-none bg-yellow-400 text-black shadow-md rounded-lg'}

                >Starships</a>
            </div>
            <div className="flex flex-wrap gap-5 p-10">
                {starships.map((el) => (
                    <div
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
        </div>
    );
};

