import {ReactNode, useState} from "react";

type props = {
    children: ReactNode,
    title: string
}

export const CustomAccordion = ({title, children}: props) => {

    const [active, setActive] = useState(false)

    const customClass = `float-right transition-all transform ${active ? "rotate-180" : ""}`

    return (
        <div className="w-2/3 lg:mx-auto">
            <button
                className="w-full my-2 h-16 px-4 bg-accent/50 text-primary"
                onClick={() => {
                    setActive(!active)
                }}
            >
                <span className="text-center font-extrabold italic text-lg">{title}</span>
                <span className={customClass}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                </svg>
            </span>
            </button>
            {
                active ?
                    <div className="border border-accent/40">
                        {children}
                    </div> : ""
            }
        </div>
    )

}