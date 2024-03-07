import {ExperienceData} from "../data/ExperienceData.ts";

export const Experience = () => {


    return (
        <div className="p-10 h-full inline-block align-middle">
            <div
                className="space-y-8 mb-3 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-accent/20 before:via-accent before:to-accent/20">

                {
                    ExperienceData.map((exp, idx) => {
                        return (
                            <div
                                key={idx}
                                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                <div
                                    className="flex items-center justify-center w-10 h-10 rounded-full border border-accent bg-accent group-[.is-active]:bg-bkg text-accent group-[.is-active]:text-accent shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg"
                                         width="12"
                                         height="10">
                                        <path fillRule="nonzero"
                                              d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"/>
                                    </svg>
                                </div>

                                <div
                                    className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] text-primary bg-accent/70 p-3 rounded border border-secondary animate__animated animate__bounceIn">
                                    <img src={exp.logo} alt="Dematic Logo"/>
                                    <h3 className="text-xl font-extrabold mt-2 border-t border-secondary/50 pt-3">
                                        {exp.position}
                                    </h3>
                                    <h5 className="font-bold pb-3">{exp.dates}</h5>
                                    <div>
                                        {exp.desc}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}