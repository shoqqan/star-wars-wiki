import './styles/index.css'
import {AppRouters} from "./routers";

export const App = () => {
    return (
        <div className={'w-screen h-screen overflow-hidden bg-[#FFFFFF] font-raleway'}>
            <AppRouters/>
        </div>
    )
}

