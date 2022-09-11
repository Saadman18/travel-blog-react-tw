import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faEarthAsia } from "@fortawesome/free-solid-svg-icons";

export default function Navbar(){
    return(
        <nav className="w-screen bg-gray-900 p-2">
            <div className="flex items-center justify-between w-[55%]">
                <div>
                    <FontAwesomeIcon className="text-green-400 text-m p-1" icon={faCircle} />
                    <FontAwesomeIcon className="text-yellow-400 text-m p-1" icon={faCircle} />
                    <FontAwesomeIcon className="text-red-400 text-m p-1" icon={faCircle} />
                </div>
                <div className="flex gap-2">
                    <FontAwesomeIcon className="text-slate-200 text-3xl" icon={faEarthAsia} />
                    <h3 className="text-slate-200 text-2xl font-bold">SKB ROAMS</h3>
                </div>
            </div>
        </nav>
    )
}