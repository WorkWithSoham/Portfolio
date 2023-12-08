import React from "react";

import "../styles/projects.css"

import {Card} from "@mui/material";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import * as utils from "../utils/utils";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from "@mui/material/Button";


interface project {
    name: string,
    desc: string,
    github?: string,
    tools: string[]
}

export const Projects = () => {

    const projects: project[] = [
        {
            name: "Job Application Tracker",
            desc: "Developed an extension to the browsers which dynamically compiles a list of all the applications submitted.",
            github: "https://github.com/WorkWithSoham/Job-Application-Tracker-Chrome-Extension",
            tools: [utils.java, utils.react, utils.mysql, utils.spring]
        },
        {
            name: "Lost It, Found It",
            desc: "Designed an android app for UTA students to report or claim lost items on campus.",
            github: "https://github.com/WorkWithSoham/Lost-It-Found-it-",
            tools: [utils.java, utils.androidStudio]
        },
        {
            name: "Store Management System",
            desc: "Created a dashboard using React to allow CRUD operations on the OracleDB populated with 12500+ entries across 12 BCNF normalized tables.",
            tools: [utils.react, utils.sql, utils.oracledb]
        },
        {
            name: "Siremar",
            desc: "Built a city management system as an academic project using React, Laravel and MySQL.",
            github: "https://github.com/WorkWithSoham/Siremar-React-Laravel",
            tools: [utils.react, utils.laravel, utils.mysql, utils.html, utils.css]
        },
        {
            name: "Eel Python Sudoku",
            desc: "Sudoku generator and solver desktop app, designed using Eel library in python and javascript.",
            github: "https://github.com/WorkWithSoham/Job-Application-Tracker-Chrome-Extension",
            tools: [utils.js, utils.python]
        },
        {
            name: "MERN Stack Social Media",
            desc: "Designed a twitter-like social media website using the MERN stack. Users can signup to create interactive posts",
            github: "https://github.com/WorkWithSoham/Job-Application-Tracker-Chrome-Extension",
            tools: [utils.mongo, utils.react, utils.nodejs]
        },
    ]

    return (
        <div className="row projects">

            {
                projects.map((project) => {
                    return (
                        <div className="m-2 mx-auto col-lg-4 animate__animated animate__flipInX">
                            <Card variant="outlined" raised
                                  sx={{background: "rgba(29,34,42,0.34)"}}>
                                <CardContent>
                                    <Typography variant="subtitle1" color="text.secondary" fontWeight="bold"
                                                component="div" fontSize={17}>
                                        {project.name}
                                    </Typography>
                                    <hr/>
                                    <Typography variant="body2" fontSize={13} color="text.secondary" gutterBottom>
                                        {project.desc}
                                    </Typography>
                                    <hr/>
                                    <Stack direction="row" className="m-1 mx-auto" spacing={1.5} alignItems="center"
                                           justifyContent="center">
                                        {
                                            project.tools.map((tool) => {
                                                return (
                                                    <Avatar alt="ToolName" src={tool} sx={{width: 30, height: 30}}/>
                                                )
                                            })
                                        }
                                    </Stack>
                                    <hr/>
                                    {project.github && <Button variant="outlined" color="primary" size="small"
                                                               startIcon={<GitHubIcon/>}
                                                               onClick={() => {
                                                                   window.open(`${project.github}`, '_blank');
                                                               }}>
                                        View
                                    </Button>}
                                </CardContent>
                            </Card>
                        </div>
                    )
                })
            }

            <Button variant="outlined" sx={{width: "30%", marginX: "auto", marginTop: "0.5rem"}} color="primary" size="small"
                    startIcon={<GitHubIcon/>}
                    onClick={() => {
                        window.open("https://github.com/WorkWithSoham?tab=repositories", '_blank');
                    }}>
                More Projects
            </Button>

        </div>
    )
}