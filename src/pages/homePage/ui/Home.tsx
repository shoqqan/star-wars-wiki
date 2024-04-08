import {Outlet, useNavigate} from "react-router-dom";
import {Input} from "../../../widgets/input";
import {ROUTES} from "../../../models/routes.ts";
import {$section, sectionsData, setSection} from "../model.ts";
import {useUnit} from "effector-react";

export const Home = () => {
    const navigate = useNavigate()
    const section = useUnit($section)
    const selectedStyle = "w-52 h-[50px] flex justify-center font-bold items-center border cursor-pointer border-none bg-yellow-400 text-black shadow-md rounded-lg"
    const notSelectedStyle = 'w-52 flex justify-center items-center border border-gray-600 cursor-pointer shadow-md rounded-lg transition-all hover:bg-yellow-400 hover:text-black'
    return (
        <div className="w-screen h-screen overflow-y-scroll flex flex-col gap-y-3 bg-black text-yellow-400">
            <div
                className="flex justify-between px-4 py-4 border-b border-yellow-400 bg-black lg:flex-col gap-5 fixed w-full z-30">
                <h1 className="font-bold text-2xl text-yellow-400 cursor-pointer"
                    onClick={() => navigate(`/home/${section}`)}>Star Wars Wiki</h1>
                <Input type={section} onSubmit={(title) => {
                    navigate(`${sectionsData[section].infoUrl}${title}`)
                }}/>
            </div>
            <div className={'w-full mt-36 h-[50px] flex justify-evenly'}>
                <a className={section === ROUTES.FILMS ? selectedStyle : notSelectedStyle}
                   onClick={() => {
                       setSection(ROUTES.FILMS)
                       navigate('films')

                   }}
                >Films</a>
                <a className={section === ROUTES.PLANETS ? selectedStyle : notSelectedStyle}
                   onClick={() => {
                       setSection(ROUTES.PLANETS)
                       navigate('planets')
                   }}
                >Planets</a>
                <a className={section === ROUTES.PEOPLE ? selectedStyle : notSelectedStyle}
                   onClick={() => {
                       setSection(ROUTES.PEOPLE)
                       navigate('people')
                   }}>People</a>
                <a className={section === ROUTES.STARSHIPS ? selectedStyle : notSelectedStyle}
                   onClick={() => {
                       setSection(ROUTES.STARSHIPS)
                       navigate('starships')
                   }}
                >Starships</a>
            </div>
            <Outlet/>
        </div>
    );
};

