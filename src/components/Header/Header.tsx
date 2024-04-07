import {Input} from "../Input/Input.tsx";
import {useNavigate} from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate()
    return (
        <div className="flex justify-between px-4 py-4 border-b border-yellow-400 bg-black">
            <h1 className="font-bold text-2xl text-yellow-400 cursor-pointer" onClick={()=>navigate('/films')}>Star Wars Wiki</h1>
            <Input onSubmit={() => {
            }}/>
        </div>
    );
};

