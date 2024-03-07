import {project, projects} from "../data/ProjectsData.ts";
import {tool} from "../data/Tools.ts";
import Tooltip from "./HTMLComponents/Tooltip.tsx";

export const Projects = () => {


    return (
        <div className="h-full grid grid-cols-1 xl:grid-cols-3 my-auto">
            {
                projects.map((project: project, idx: number) => {

                    return (
                        <div
                            key={idx.toString()}
                            className="my-2 mx-4 lg:p-4 text-center text-primary
                            border border-secondary/40 min-h-48 h-auto xl:w-auto
                            animate__animated animate__zoomIn
                            ">
                            <h4 className="font-bold text-sm border-b border-secondary/40 pb-2 lg:pb-4 mx-1 2xl:text-base">{project.name}</h4>
                            <p className="text-xs mt-2 border-b border-secondary/40 pb-2 lg:pb-4">{project.desc}</p>
                            <div
                                className="inline-flex justify-center grid-cols-2 w-full border-b border-secondary/40">
                                {
                                    project.tools.map((tool: tool, idx: number) => {
                                        return (
                                            <Tooltip message={tool.name}
                                                     key={idx.toString()}>
                                                <img
                                                    className="justify-center p-0.5 w-10 h-10 rounded-full border-[1px] cursor-pointer
                                                               border-t-slate-400 border-l-slate-400 border-b-slate-700 border-r-slate-700"
                                                    src={tool.pic}
                                                    alt={tool.name}
                                                    onClick={() => {
                                                        window.open(tool.link, '_blank')
                                                    }}/>
                                            </Tooltip>
                                        )
                                    })
                                }
                            </div>
                            {project.github ? <a
                                className="px-3 py-2 w-1/3 text-sm text-center inline-flex justify-center
                    bg-slate-700/50 my-4 border-[1px] border-primary/40 text-primary/80 rounded-md
                    hover:bg-slate-400/50"
                                type="button"
                                href={project.github}
                                target="_blank"
                            >
                                <span>View</span>
                            </a> : <></>}
                        </div>
                    )
                })
            }
        </div>
    )
}