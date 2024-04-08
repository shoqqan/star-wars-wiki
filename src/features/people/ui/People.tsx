import {useUnit} from "effector-react";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {$people, fetchPeopleFx} from "../model.ts";

export const People = () => {
    const people = useUnit($people)
    const navigate = useNavigate()
    useEffect(() => {
        fetchPeopleFx()
    }, [])
    return (
        <div className="flex flex-wrap gap-5 p-10 justify-center">
            {people.map((el) => (
                <div
                    key={el.name}
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
    );
};

