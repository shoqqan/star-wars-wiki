import {Input} from "../Input/Input.tsx";

export const Header = () => {
    return (
        <div className="flex justify-between px-4 py-4 border-b border-yellow-400 bg-black">
            <h1 className="font-bold text-2xl text-yellow-400">Star Wars Wiki</h1>
            <Input onSubmit={() => {
            }}/>
        </div>
    );
};

