// import {TechStackData} from "../data/TechStackData.ts";
import {CustomAccordion} from "./HTMLComponents/CustomAccordion.tsx";
import {
    angular,
    css, dbeaver, django, docker, git,
    graphql,
    html,
    java, jira,
    js, mongo, mysql, nodejs, oracledb, postman, psql,
    python,
    react, spring,
    sql,
    ts
} from "../utils/file_paths.ts";
import Tooltip from "./HTMLComponents/Tooltip.tsx";

interface tool {
    name: string,
    pic: string,
    link: string
}

export const TechStack = () => {

    const tools: Array<{ title: string; tools: Array<tool> }> = [
        {
            title: "Languages",
            tools: [
                {name: "Python", pic: python, link: "https://www.python.org/"},
                {
                    name: "JavaScript",
                    pic: js,
                    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                },
                {name: "Java", pic: java, link: "https://www.java.com/"},
                {name: "TypeScript", pic: ts, link: "https://www.typescriptlang.org/"},
                {name: "SQL", pic: sql, link: "https://en.wikipedia.org/wiki/SQL"},
                {name: "GraphQL", pic: graphql, link: "https://graphql.org/"},
                {
                    name: "HTML",
                    pic: html,
                    link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
                },
                {name: "CSS", pic: css, link: "https://developer.mozilla.org/en-US/docs/Web/CSS"}
            ]
        },
        {
            title: "Frameworks",
            tools: [
                {name: "React", pic: react, link: "https://reactjs.org/"},
                {name: "Angular", pic: angular, link: "https://angular.io/"},
                {name: "Django", pic: django, link: "https://www.djangoproject.com/"},
                {name: "Node.js", pic: nodejs, link: "https://nodejs.org/"},
                {name: "Spring", pic: spring, link: "https://spring.io/"}
            ]
        },
        {
            title: "Databases",
            tools: [
                {name: "MySQL", pic: mysql, link: "https://www.mysql.com/"},
                {name: "MongoDB", pic: mongo, link: "https://www.mongodb.com/"},
                {name: "Oracle Database", pic: oracledb, link: "https://www.oracle.com/database/"},
                {name: "PostgreSQL", pic: psql, link: "https://www.postgresql.org/"}
            ]
        },
        {
            title: "Tools",
            tools: [
                {name: "Docker", pic: docker, link: "https://www.docker.com/"},
                {name: "Git", pic: git, link: "https://git-scm.com/"},
                {name: "DBeaver", pic: dbeaver, link: "https://dbeaver.io/"},
                {name: "Postman", pic: postman, link: "https://www.postman.com/"},
                {name: "Jira", pic: jira, link: "https://www.atlassian.com/software/jira"}
            ]
        }
    ];

    return (
        <div className="flex flex-col w-auto m-3">
            <div className="">
                <h1 className="text-center text-primary/80 xl:text-2xl text-base m-2 lg:m-5 p-3 pb-8 lg:p-10 border-b border-secondary/50">
                    I bring expertise in Web Development, Software Engineering, and Database
                    Management to create visually stunning and user-friendly online experiences.
                </h1>
            </div>
            {
                tools.map((tool: { title: string, tools: tool[] }, index: number) => {
                    return (
                        <div
                            key={index.toString()}
                        >
                            <CustomAccordion title={tool.title}>
                                <div className="grid grid-cols-5 md:flex mb-3 justify-center">
                                    {
                                        tool.tools.map((tool: tool, idx: number) => {
                                            return (
                                                <Tooltip message={tool.name}
                                                         key={idx.toString()}>
                                                    <img
                                                        className="mx-2 mt-0 justify-center p-0.5 w-10 h-10 rounded-full border-[1px] cursor-pointer
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
                            </CustomAccordion>
                        </div>
                    )
                })
            }
        </div>
    )
}