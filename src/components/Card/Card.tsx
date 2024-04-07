import {FC} from "react";

interface CardProps {
    image: string
    title: string
}

export const Card: FC<CardProps> = ({title, image}) => {
    return (
        <div className={'w-[200px] h-[300px]'}>
            <img src={image} alt={`Image of ${title}`}/>
            <h2>{title}</h2>
        </div>
    );
};

