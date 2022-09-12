import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faEarthAsia, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function Navbar(){
    const [theme, setTheme] = useState(null);

    useEffect(() => {
        if(window.matchMedia('(prefer-color-scheme: dark)').match){
            setTheme('dark');
        }
        else{
            setTheme('light');
        }
    }, []);

    useEffect(() => {
        if(theme === 'dark'){
            document.documentElement.classList.add('dark')
        }
        else{
            document.documentElement.classList.remove('dark')
        }
    }, [theme]);

    const handleTheme = () => {
        if(theme === 'dark'){
            setTheme('light');
        }
        else{
            setTheme('dark');
        }
    }


    return(
        <nav className="min-w-screen flex justify-between p-2 bg-slate-100 dark:bg-slate-600 shadow-lg shadow-pink-300/50 dark:shadow-lg">
            <div className="flex items-center justify-between w-[55%]">
                <div>
                    <FontAwesomeIcon className="text-green-400 text-m p-1" icon={faCircle} />
                    <FontAwesomeIcon className="text-yellow-400 text-m p-1" icon={faCircle} />
                    <FontAwesomeIcon className="text-red-400 text-m p-1" icon={faCircle} />
                </div>
                <div className="flex gap-2">
                    <FontAwesomeIcon className="text-slate-700 dark:text-pink-300/90 text-3xl transition duration-700 ease-linear" icon={faEarthAsia} />
                    <h3 className="text-slate-700 dark:text-slate-100 text-2xl font-bold">WANDr</h3>
                </div>
            </div>
            <button onClick={handleTheme} className="bg-pink-400/50 shadow-md dark:bg-slate-400/50 py-1 px-3 mx-3 rounded-3xl">
                {theme === 'dark' ? <FontAwesomeIcon className="text-stone-100" icon={faSun}/> : <FontAwesomeIcon className="text-slate-700" icon={faMoon} />}
            </button>
        </nav>
    )
}
