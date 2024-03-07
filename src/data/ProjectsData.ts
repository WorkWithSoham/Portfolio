import {tool, tools} from "./Tools.ts";

export interface project {
    name: string,
    desc: string,
    github?: string,
    tools: tool[]
}

export const projects: project[] = [
    {
        name: "Job Application Tracker",
        desc: "Developed an extension to the browsers which dynamically compiles a list of all the applications submitted.",
        github: "https://github.com/WorkWithSoham/Job-Application-Tracker-Chrome-Extension",
        tools: [tools.java, tools.react, tools.mysql, tools.spring]
    },
    {
        name: "Lost It, Found It",
        desc: "Designed an android app for UTA students to report or claim lost items on campus.",
        github: "https://github.com/WorkWithSoham/Lost-It-Found-it-",
        tools: [tools.java, tools.androidStudio]
    },
    {
        name: "Store Management System",
        desc: "React dashboard for CRUD operations on Oracle DB having 12+ tables with 12500" +
            " rows each",
        github: "",
        tools: [tools.react, tools.sql, tools.oracledb]
    },
    {
        name: "Siremar",
        desc: "Built a city management system as an academic project using React, Laravel and MySQL.",
        github: "https://github.com/WorkWithSoham/Siremar-React-Laravel",
        tools: [tools.react, tools.laravel, tools.mysql, tools.html, tools.css]
    },
    {
        name: "Eel Python Sudoku",
        desc: "Sudoku generator and solver desktop app, designed using Eel library in python and javascript.",
        github: "https://github.com/WorkWithSoham/Job-Application-Tracker-Chrome-Extension",
        tools: [tools.js, tools.python]
    },
    {
        name: "MERN Stack Social Media",
        desc: "Designed a twitter-like social media website using the MERN stack. Users can signup to create interactive posts",
        github: "https://github.com/WorkWithSoham/Job-Application-Tracker-Chrome-Extension",
        tools: [tools.mongo, tools.react, tools.nodejs]
    },
]