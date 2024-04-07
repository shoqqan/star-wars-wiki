import {Header} from "../../components/Header/Header.tsx";
import {useUnit} from "effector-react";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {$starships, fetchStarshipsFx} from "./model.ts";
import {Input} from "../../components/Input/Input.tsx";

export const Starships = () => {
    const starships = useUnit($starships)
    const navigate = useNavigate()
    useEffect(() => {
        fetchStarshipsFx()
    }, [])
    return (
        <div className="w-screen h-screen overflow-y-scroll flex flex-col gap-y-3 bg-black text-yellow-400">
            <div className="flex justify-between px-4 py-4 border-b border-yellow-400 bg-black">
                <h1 className="font-bold text-2xl text-yellow-400 cursor-pointer" onClick={()=>navigate('/films')}>Star Wars Wiki</h1>
                <Input type={"starships"} onSubmit={(title) => {
                    navigate(`/starships_info/${title}`)
                }}/>
            </div>
            <div className={'w-full h-[50px] flex justify-evenly'}>
                <a
                    className={'w-52 h-[50px] flex justify-center cursor-pointer items-center border border-gray-600 shadow-md rounded-lg transition-all hover:bg-yellow-400 hover:text-black'}
                    onClick={() => {
                        navigate('/films')
                    }}
                >Films</a>
                <a
                    className={'w-52 flex justify-center items-center cursor-pointer border border-gray-600 shadow-md rounded-lg transition-all hover:bg-yellow-400 hover:text-black'}
                    onClick={() => {
                        navigate('/planets')
                    }}
                >Planets</a>

                <a
                    className={'w-52 flex justify-center items-center border cursor-pointer border-gray-600 shadow-md rounded-lg transition-all hover:bg-yellow-400 hover:text-black'}
                    onClick={() => {
                        navigate('/people')
                    }}

                >People</a>
                <a
                    className={'w-52 flex justify-center items-center border cursor-pointer border-none bg-yellow-400 text-black shadow-md rounded-lg'}

                >Starships</a>
            </div>
            <div className="flex flex-wrap gap-5 p-10">
                {starships.map((el) => (
                    <div
                        onClick={()=>navigate(`/starships_info/${el.name}`)}
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

