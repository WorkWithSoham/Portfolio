import {EducationData, University} from "../data/EducationData.ts";
import React from "react";

export const Education = () => {

    return (
        <div className="flex flex-col m-2 xl:flex-row h-full my-auto">
            {
                EducationData.map((u: University, idx: number): React.JSX.Element => {
                    return (
                        <div key={idx}
                             className="lg:w-full 2xl:h-auto max-h-[85%] m-2 xl:m-4 bg-accent/70 border border-secondary/50 rounded-lg
                             animate__animated animate__fadeIn">
                            <img src={u.logo} className="h-32 w-36 my-3 mx-auto" alt="UTA Logo"/>
                            <div className="flex flex-col w-full text-center text-primary p-2 mx-auto">
                                <h1 className="text-lg font-extrabold">{u.name}</h1>
                                <p className="text-base  mt-2">{u.degree}</p>
                                <ul className="list-disc list-inside my-3 xl:m-4 text-xs">
                                    {
                                        u.subjects.map((sub: string, idx: number) => {
                                            return (
                                                <li key={idx}>{sub}</li>
                                            )
                                        })
                                    }
                                </ul>
                                <br/>
                                <button type="button"
                                        className="mx-auto m-2 p-2 xl:w-1/2 border-[1px] border-secondary rounded-md bg-accent/10 hover:bg-accent/50"
                                        onClick={() => {
                                            window.open(u.link, '_blank')
                                        }}
                                >
                                    Website
                                </button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}