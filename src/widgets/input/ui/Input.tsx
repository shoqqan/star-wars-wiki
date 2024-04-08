import React, {ChangeEvent, useState} from "react";
import {ROUTES} from "../../../models/routes.ts";

interface InputProps {
    onSubmit: (title: string) => void
    type: ROUTES
}

export const Input = React.memo(function (props: InputProps) {
    const [title, setTitle] = useState('')
    const [error, setError] = useState<string | null>(null)
    const onSubmit = () => {
        if (title.trim() !== '') {
            props.onSubmit(title);
            setTitle('');
        } else {
            setError('Title is required');
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (error !== null) {
            setError(null);
        }
        if (e.charCode === 13) {
            onSubmit();
        }
    }

    return <div className={'flex flex-col gap-1'}>
        <div className={'flex gap-x-5 items-center'}>
            <input type="text" value={title} onChange={onChangeHandler} onKeyPress={onKeyPressHandler}
                   className={'px-4 py-2 rounded-2xl bg-yellow-400 text-black border-black active:outline-none'} placeholder={`${props.type} name...`}/>
            <button
                className={'flex px-4 py-2 justify-center items-center text-yellow-400 bg-black text-sm border border-yellow-400 shadow-lg rounded-lg transition-all hover:bg-yellow-400 hover:text-black'}
                onClick={onSubmit}>
                Find
            </button>
        </div>
        {error && <p className={'text-red-600 font-medium mb-2'}>{error}</p>}
    </div>
})