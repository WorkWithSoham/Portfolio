import {useState} from "react";
import {MoonIcon, SunIcon} from "@heroicons/react/24/solid";
import {Navbar, NavbarBrand} from 'flowbite-react';
import {st_logo, slogan} from "../../utils/file_paths.ts"


export const CustomNavbar = () => {

    const [theme, setTheme] = useState("dark");

    return (
        <Navbar
            className="bg-accent items-baseline flex w-full flex-col justify-center md:flex-row md:space-x-4">
            <div className="w-full md:w-20 flex items-center md:items-start">
                <NavbarBrand href="https://sohamtembe.com" className="mx-auto h-12">
                    <img src={st_logo} className="w-12" alt="ST Logo"/>
                </NavbarBrand>
            </div>

            <div className="mx-auto">
                <img src={slogan} className="h-6 w-auto items-center flex justify-center md:h-9 md:w-96"
                     alt="Empowering through code!"/>
            </div>


            {theme === "dark" ?
                <button onClick={() => {
                    setTheme("light")
                    document.getElementById('root')!.setAttribute("data-theme", "light")
                }}>
                    <SunIcon className="h-4 w-4 md:h-7 md:w-7 text-slate-500"/>
                </button> :
                <button onClick={() => {
                    setTheme("dark")
                    document.getElementById('root')!.setAttribute("data-theme", "dark")
                }}>
                    <MoonIcon className="h-4 w-4 md:h-7 md:w-7 text-slate-500"/>
                </button>
            }


        </Navbar>
    )
}