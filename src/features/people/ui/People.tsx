import {useUnit} from "effector-react";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {$people, fetchPeopleFx} from "../model.ts";

export const People = () => {
    const people = useUnit($people)
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        if (!people.length) {
            setIsLoading(true)
            fetchPeopleFx().finally(() => {
                setIsLoading(false)
            })
        }
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
            {people.map((el) => (
                <div
                    key={el.uid}
                    onClick={() => {
                        navigate(`/people_info/${el.properties.name}`)
                    }}
                    className={'w-52 h-80 flex flex-col justify-center gap-5 border border-gray-600 transition-all p-4 rounded-lg shadow-md relative cursor-pointer hover:border-green-500'}>
                    <h2 className={'font-semibold text-lg'}><span className={'font-bold'}>{el.properties.name}</span>
                    </h2>
                    <p className={'text-sm text-gray-100'}>Height: <span
                        className={'font-bold text-yellow-400'}>{el.properties.height}</span></p>
                    <p className={'text-sm text-gray-100'}>Mass: <span
                        className={'font-bold text-yellow-400'}>{el.properties.mass}</span></p>
                    <p className={"text-sm text-gray-100"}>Gender: <span
                        className={'font-bold text-yellow-400'}>{el.properties.gender}</span></p>
                    <p className={"text-sm text-gray-100"}>Hair Color: <span
                        className={'font-bold text-yellow-400'}>{el.properties.hair_color}</span></p>
                    <p className={"text-sm text-gray-100"}>Eye Color: <span
                        className={'font-bold text-yellow-400'}>{el.properties.eye_color}</span></p>
                </div>
            ))}
        </div>
    );
};

