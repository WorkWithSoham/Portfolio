import React from "react";

import {getPdfURL} from "../types.s";

import {dp, github, insta, linkedin, leetcode} from "../utils/utils";

import "../styles/greeting.css"

import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import TabContext from "@mui/lab/TabContext";
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';


export const Greeting = () => {

    const resume = getPdfURL('SohamTembeResume.pdf')

    return (
        <div className="mx-0 greeting">
            <TabContext value={""}>
                <Box sx={{width: '100%'}}>
                    <Box className="mt-4" sx={{borderBottom: 1, borderColor: '#21262d'}}>
                        <Tabs
                            centered
                            textColor="inherit"
                            TabIndicatorProps={{style: {background: '#f78166'}}}
                        >
                        </Tabs>
                    </Box>
                </Box>
            </TabContext>
            <div className="image-cropper animate__animated animate__fadeInLeft shine">
                <img src={dp} className="profileImg" alt="Profile Img"/>
            </div>
            <div className="mx-5 pt-0 text-start">
                <Typography variant="h5" noWrap={true} color="lightgrey" style={{fontWeight: "bold"}} className="m-0"
                            gutterBottom>
                    Soham Tembe
                </Typography>
                <Typography variant="h6" color="darkgrey" className="m-0" gutterBottom>
                    WorkWithSoham
                </Typography>
                <a href={resume} type="button" className="btn btn-sm btn-outline-secondary mt-2 resumeBtn"
                   style={{width: "100%"}}
                   target="_blank">
                    <FeedOutlinedIcon fontSize="small"/> Resume
                </a>
                <Typography variant="subtitle2" className="mt-3 mb-3">
                    <LocationOnOutlinedIcon fontSize="small"/> Arlington, TX, USA
                </Typography>
            </div>
            <hr/>
            <div className="text-start">
                <div style={{display: 'inline', marginLeft: '2.5rem'}}>
                    <IconButton onClick={() => {
                        window.open('https://github.com/WorkWithSoham', '_blank');
                    }}>
                        <Avatar alt="github" src={github} variant="rounded"/>
                    </IconButton>
                    <IconButton onClick={() => {
                        window.open('https://www.linkedin.com/in/sohamtembe', '_blank');
                    }}>
                        <Avatar alt="linkedin" src={linkedin} variant="rounded"/>
                    </IconButton>
                    <IconButton onClick={() => {
                        window.open('https://www.instagram.com/sohamtembe_912/', '_blank');
                    }}>
                        <Avatar alt="insta" src={insta} variant="rounded"/>
                    </IconButton>
                    <IconButton onClick={() => {
                        window.open('https://leetcode.com/sohamtembe98/', '_blank');
                    }}>
                        <Avatar alt="insta" src={leetcode} variant="rounded"/>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}