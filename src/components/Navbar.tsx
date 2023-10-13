import React from 'react';

import {st_logo} from "../utils/utils"
import {slogan} from "../utils/utils"
import "../styles/navbar.css"

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';


export const Navbar = () => {

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar sx={{bgcolor: "#24292f"}}>
                    <IconButton sx={{p: 2}}>
                        <Avatar alt="Soham" className="img-fluid logoImg" src={st_logo} variant="rounded"
                                sx={{height: "auto", minWidth: "150%"}}
                                onClick={() => {

                                }}
                        />
                    </IconButton>
                    <img src={slogan} className="img-fluid mx-auto" alt="Empowering through code!"
                         style={{height: "auto", width: "30%"}}/>
                </Toolbar>
            </AppBar>
        </Box>
    )
}