import React from "react";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Cards(props){

    return (
       <div className="container mx-20 my-2 p-2 flex gap-2 
        rounded-md shadow-sm dark:shadow-slate-500
        border border-pink-400 dark:border-slate-500
        bg-slate-100 dark:bg-slate-600 
        text-slate-700 dark:text-slate-100">
            <div>
                <img className="max-w-[12rem] object-fit rounded-md" src={`/assets/${props.item.img}`} alt="location image"/>
            </div>
            <div className="flex flex-col gap-1 justify-start">
                <div>
                    <span className="text-sm font-medium pr-6">{props.item.location}</span>
                    <FontAwesomeIcon className="text-red-400 dark:text-pink-300 pr-1" icon={faLocationPin}/>
                    <a href={`${props.item.maps}`} target="_blank" className="text-sm font-thin text-red-400 dark:text-slate-100">Google Map</a>
                </div>
                <p className="font-thin text-[0.7rem]"><span>{props.item.date.start} - </span> <span>{props.item.date.end}</span> </p>
                <h1 className="text-xl font-bold">{props.item.title}</h1>
                <p className="text-md">{props.item.description}</p>
            </div>
       </div>
    )
}