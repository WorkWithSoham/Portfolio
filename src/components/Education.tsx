import React from "react";

import "../styles/education.css";
import SchoolIcon from '@mui/icons-material/School';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import {uta, si} from "../utils"

export const Education = () => {

    return (
        <div className="education mx-auto">
            <div className="mx-auto text-start px-2">
                <Paper elevation={24} color="none" className="m-2 mt-1 p-3 schoolBackground animate__animated animate__backInDown">
                    <div className='row'>
                        <div className='col-8 mx-auto'>
                            <h5><SchoolIcon fontSize='large' className='mx-2'/>M.S. in Computer Science</h5>
                            <h5 className="mt-2">The University of Texas at Arlington</h5>
                            <ul className="mt-2">
                                <li>Data Structures and Algorithms</li>
                                <li>Big Data and Cloud Computing</li>
                                <li>Advanced Software Engineering</li>
                                <li>Web Data Management</li>
                            </ul>
                            <Button variant="outlined" color="primary" onClick={() => {
                                window.open('https://www.uta.edu/', '_blank');
                            }}>Website</Button>
                        </div>

                        <div className='col-4 mx-auto text-center'>
                            <p>2021 - 2023</p>
                            <img src={uta} alt="UTA logo" className="p-2 img-fluid"/>
                        </div>

                    </div>
                </Paper>

                <Paper elevation={24} color="none" className="m-2 mb-1 p-3 schoolBackground animate__animated animate__backInUp">
                    <div className='row'>
                        <div className='col-8 mx-auto'>
                            <h5 style={{display: 'inline'}}><SchoolIcon fontSize='large' className='mx-2'/>B.E. in
                                Electronics &
                                Telecom</h5>
                            <h5 className="mt-2">S.K.N. College of Engineering</h5>
                            <ul className="mt-2">
                                <li>Advanced Mathematics</li>
                                <li>Computer Network</li>
                                <li>Object Oriented Programming</li>
                            </ul>
                            <Button variant="outlined" color="primary" onClick={() => {
                                window.open('http://cms.sinhgad.edu/sinhgad_engineering_institutes/skncoe_vadgaon/institute_details.aspx', '_blank');
                            }}>
                                Website
                            </Button>
                        </div>

                        <div className='col-4 mx-auto text-center'>
                            <p>2017 - 2021</p>
                            <img src={si} alt="UTA logo" className="p-2 img-fluid"/>
                        </div>
                    </div>
                </Paper>
            </div>
        </div>
    )
}