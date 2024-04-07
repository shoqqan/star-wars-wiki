import {useEffect} from "react";
import {$films, fetchFilmsFx} from "./model.ts";
import {useUnit} from "effector-react";
import {useNavigate} from "react-router-dom";
import {Input} from "../../components/Input/Input.tsx";

export const Films = () => {
    const films = useUnit($films)
    const navigate = useNavigate()
    useEffect(() => {
        fetchFilmsFx()
    }, [])
    return (
        <div className="w-screen h-screen overflow-y-scroll flex flex-col gap-y-3 bg-black text-yellow-400">
            <div className="flex justify-between px-4 py-4 border-b border-yellow-400 bg-black lg:flex-col gap-5 fixed w-full z-30">
                <h1 className="font-bold text-2xl text-yellow-400 cursor-pointer"
                    onClick={() => navigate('/films')}>Star Wars Wiki</h1>
                <Input type={"film"} onSubmit={(title) => {
                    navigate(`/film_info/${title}`)
                }}/>
            </div>
            <div className={'w-full mt-36 h-[50px] flex justify-evenly'}>
                <a className={'w-52 h-[50px] flex justify-center items-center border cursor-pointer border-none bg-yellow-400 text-black shadow-md rounded-lg'}

                >Films</a>
                <a className={'w-52 flex justify-center items-center border border-gray-600 cursor-pointer shadow-md rounded-lg transition-all hover:bg-yellow-400 hover:text-black'}
                   onClick={() => {
                       navigate('/planets')
                   }}
                >Planets</a>
                <a className={'w-52 flex justify-center items-center border border-gray-600 cursor-pointer shadow-md rounded-lg transition-all hover:bg-yellow-400 hover:text-black'}
                   onClick={() => {
                       navigate('/people')
                   }}>People</a>
                <a className={'w-52 flex justify-center items-center border border-gray-600 cursor-pointer shadow-md rounded-lg transition-all hover:bg-yellow-400 hover:text-black'}
                   onClick={() => {
                       navigate('/starships')
                   }}
                >Starships</a>
            </div>
            <div className="flex flex-wrap gap-5 p-10 justify-center">
                {films.map((el) => (
                    <div
                        key={el.episode_id}
                        className={'w-52 h-80 flex flex-col justify-center gap-5 border border-gray-600 transition-all p-4 rounded-lg shadow-md relative cursor-pointer hover:border-green-500'}
                        onClick={() => {
                            console.log(el.episode_id)
                            navigate(`/film_info/${el.title}`)
                        }}
                    >
                        <h2 className={'font-semibold text-lg'}><span className={'font-bold'}>{el.title}</span></h2>
                        <p className={'text-sm text-gray-100'}>Episode: <span
                            className={'font-bold text-yellow-400'}>{el.episode_id}</span></p>
                        <p className={'text-sm text-gray-100'}>Directed by: <span
                            className={'font-bold text-yellow-400'}>{el.director}</span></p>
                        <p className={"text-sm text-gray-100"}>Producers: <span
                            className={'font-bold text-yellow-400'}>{el.producer}</span></p>
                    </div>
                ))}
            </div>
        </div>
    );
};

