import React from 'react';

import {st_logo} from "../utils/utils"

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
                    <IconButton sx={{p: 0}}>
                        <Avatar alt="Soham" src={st_logo} variant="rounded" sx={{width: "100%", maxWidth: "5.5vh"}}/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    )
}