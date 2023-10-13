import React from "react";

import '../styles/skills.css'

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import Avatar from "@mui/material/Avatar";
import Stack from '@mui/material/Stack';

import StorageIcon from '@mui/icons-material/Storage';
import TerminalIcon from '@mui/icons-material/Terminal';
import DataObjectIcon from '@mui/icons-material/DataObject';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';

import {
    python, js, ts, java, sql, graphql, html, css,
    react, angular, django, nodejs, spring,
    mongo, mysql, oracledb, psql,
    docker, git, dbeaver, postman, jira
} from "../utils/utils";


export const Skills = () => {

    return (
        <div className="container skills animate__animated animate__pulse">
            <h5 className="m-3 mb-5">I bring expertise in Web Development, Software Engineering, and Database Management
                to create visually stunning and user-friendly online experiences.</h5>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography variant='h5'><DataObjectIcon fontSize="large"/> Languages</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{background: '#3b3a3a'}} className="m-2">
                    <Stack direction="row" className="m-1 mb-0" spacing={3}>
                        <Avatar alt="Python" data-bs-toggle="tooltip" data-bs-title="Python" src={python}
                                sx={{width: 50, height: 50}}/>
                        <Avatar alt="JavaScript" src={js} sx={{width: 50, height: 50}}/>
                        <Avatar alt="TypeScript" src={ts} sx={{width: 50, height: 50}}/>
                        <Avatar alt="Java" src={java} sx={{width: 50, height: 50}}/>
                        <Avatar alt="SQL" src={sql} sx={{width: 50, height: 50}}/>
                        <Avatar alt="GraphQL" src={graphql} sx={{width: 50, height: 50}}/>
                        <Avatar alt="HTML" src={html} sx={{width: 50, height: 50}}/>
                        <Avatar alt="CSS" src={css} sx={{width: 50, height: 50}}/>
                    </Stack>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography variant='h5'><TerminalIcon fontSize="large"/> Frameworks</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{background: '#3b3a3a'}} className="m-2">
                    <Stack direction="row" className="m-1 mb-0" spacing={3}>
                        <Avatar alt="react" src={react} sx={{width: 50, height: 50}}/>
                        <Avatar alt="angular" src={angular} sx={{width: 50, height: 50}}/>
                        <Avatar alt="Django" src={django} sx={{width: 50, height: 50}}/>
                        <Avatar alt="nodejs" src={nodejs} sx={{width: 50, height: 50}}/>
                        <Avatar alt="spring" src={spring} sx={{width: 50, height: 50}}/>
                    </Stack>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography variant='h5'><StorageIcon fontSize="large"/> Databases</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{background: '#3b3a3a'}} className="m-2">
                    <Stack direction="row" className="m-1 mb-0" spacing={3}>
                        <Avatar alt="mongo" src={mongo} sx={{width: 50, height: 50}}/>
                        <Avatar alt="mysql" src={mysql} sx={{width: 50, height: 50}}/>
                        <Avatar alt="oracledb" src={oracledb} sx={{width: 50, height: 50}}/>
                        <Avatar alt="psql" src={psql} sx={{width: 50, height: 50}}/>
                    </Stack>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography variant='h5'><DeveloperBoardIcon fontSize="large"/> Tools</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{background: '#3b3a3a'}} className="m-2">
                    <Stack direction="row" className="m-1 mb-0" spacing={3}>
                        <Avatar alt="docker" src={docker} sx={{width: 50, height: 50}}/>
                        <Avatar alt="git" src={git} sx={{width: 50, height: 50}}/>
                        <Avatar alt="dbeaver" src={dbeaver} sx={{width: 50, height: 50}}/>
                        <Avatar alt="postman" src={postman} sx={{width: 50, height: 50}}/>
                        <Avatar alt="jira" src={jira} sx={{width: 50, height: 50}}/>
                    </Stack>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}