import {useUnit} from "effector-react";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {$people, fetchPeopleFx} from "./model.tsx";
import {Input} from "../../components/Input/Input.tsx";

export const People = () => {
    const people = useUnit($people)
    const navigate = useNavigate()
    useEffect(() => {
        fetchPeopleFx()
    }, [])
    return (
        <div className="w-screen h-screen overflow-y-scroll flex flex-col gap-y-3 bg-black text-yellow-400">
            <div className="flex justify-between px-4 py-4 border-b border-yellow-400 bg-black">
                <h1 className="font-bold text-2xl text-yellow-400 cursor-pointer"
                    onClick={() => navigate('/films')}>Star Wars Wiki</h1>
                <Input type={"people"} onSubmit={(title) => {
                    navigate(`/people_info/${title}`)
                }}/>
            </div>
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
                    className={'w-52 flex justify-center items-center border border-none bg-yellow-400 text-black shadow-md rounded-lg'}


                >People</a>
                <a
                    className={'w-52 flex justify-center items-center border border-gray-600 shadow-md rounded-lg transition-all hover:bg-yellow-400 hover:text-black'}
                    onClick={() => {
                        navigate('/starships')
                    }}

                >Starships</a>
            </div>
            <div className="flex flex-wrap gap-5 p-10">
                {people.map((el) => (
                    <div
                        onClick={() => {
                            navigate(`/people_info/${el.name}`)
                        }}
                        className={'w-52 h-80 flex flex-col justify-center gap-5 border border-gray-600 transition-all p-4 rounded-lg shadow-md relative cursor-pointer hover:border-green-500'}>
                        <h2 className={'font-semibold text-lg'}><span className={'font-bold'}>{el.name}</span></h2>
                        <p className={'text-sm text-gray-100'}>Height: <span
                            className={'font-bold text-yellow-400'}>{el.height}</span></p>
                        <p className={'text-sm text-gray-100'}>Mass: <span
                            className={'font-bold text-yellow-400'}>{el.mass}</span></p>
                        <p className={"text-sm text-gray-100"}>Gender: <span
                            className={'font-bold text-yellow-400'}>{el.gender}</span></p>
                        <p className={"text-sm text-gray-100"}>Hair Color: <span
                            className={'font-bold text-yellow-400'}>{el.hair_color}</span></p>
                        <p className={"text-sm text-gray-100"}>Eye Color: <span
                            className={'font-bold text-yellow-400'}>{el.eye_color}</span></p>
                    </div>
                ))}
            </div>
        </div>
    );
};

