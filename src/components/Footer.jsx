import { faCandyCane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Footer(){
    return(
        <div className="min-w-screen 
                bg-slate-100 dark:bg-slate-600
                font-bold text-lg
                text-pink-400 dark:text-slate-100 
                py-3 
                flex justify-center items-center
        ">
            <p>No Copyrights Reserved. Feel free to use this template</p>
            <FontAwesomeIcon className="text-pink-400" icon={faCandyCane}/>
        </div>
    )
}