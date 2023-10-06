import React from "react";
import '../styles/experience.css';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Paper from "@mui/material/Paper";

import {dematic, owl} from "../utils/utils"

export const Experience = () => {

    return (
        <div className="text-center experience">
            <Timeline position="alternate" className="mx-auto">
                <TimelineItem>
                    <TimelineOppositeContent color="text.secondary">
                        August 2022 - June 2023
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="primary" variant="outlined"/>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={24} color="none" className="mt-1 p-3 animate__animated animate__fadeInRight">
                            <img src={dematic} className="img-fluid" alt="dematic_logo"/>
                            <hr/>
                            <h4>Software Engineer Intern</h4>
                            <ul className="p-0">
                                <li>
                                    Conducted comprehensive software testing, collaborating in an agile team to improve software quality, and developed
                                    automation scripts in Java for efficient testing.
                                </li>
                            </ul>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent color="text.secondary">
                        August 2020 - March 2021
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="secondary" variant="outlined"/>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={24} color="none" className="text-start mt-1 p-3 animate__animated animate__fadeInLeft">
                            <img src={owl} className="img-fluid" alt="dematic_logo"/>
                            <hr/>
                            <h4>Full Stack Developer Intern</h4>
                            <ul className="p-0">
                                <li>
                                    Led implementation of SaaS and database restructuring, attracting over 300 customers,
                                    and improving website UI for enhanced user experience and scalability.
                                </li>
                            </ul>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    )
}