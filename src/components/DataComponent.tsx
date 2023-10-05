import React from "react";

import '../styles/dataComponent.css'

import {Home} from "./Home";
import {Education} from "./Education";
import {Experience} from "./Experience";
import {Skills} from "./Skills";
import {Contact} from "./Contact";
import {Projects} from "./Projects";

import HomeIcon from '@mui/icons-material/Home';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import WorkIcon from '@mui/icons-material/Work';
import ConstructionIcon from '@mui/icons-material/Construction';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";


const verticalAlignStyle: React.CSSProperties = {
    alignItems: "center",
    borderStyle: 'solid',
    borderWidth: '0.01px',
    borderColor: 'grey',
    minHeight: '78vh',
    maxHeight: '78vh',
    overflowY: 'scroll'
}

export const DataComponent = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <TabContext value={value}>
            <Box sx={{width: '100%'}}>
                <Box sx={{borderBottom: 1, borderColor: '#21262d'}}>
                    <Tabs
                        className="mx-5"
                        value={value}
                        onChange={handleChange}
                        textColor="inherit"
                        TabIndicatorProps={{style: {background: '#f78166'}}}
                    >
                        <Tab icon={<HomeIcon/>} iconPosition="start" label="Home" value="1"/>
                        <Tab icon={<HistoryEduIcon/>} iconPosition="start" label="Education" value="2"/>
                        <Tab icon={<WorkIcon/>} iconPosition="start" label="Experience" value="3"/>
                        <Tab icon={<ConstructionIcon/>} iconPosition="start" label="Skills" value="4"/>
                        <Tab icon={<EngineeringIcon/>} iconPosition="start" label="Projects" value="5"/>
                        <Tab icon={<ContactPageIcon/>} iconPosition="start" label="Contact" value="6"/>
                    </Tabs>
                </Box>
                <Box sx={{width: '90%'}} className="mx-auto p-1 pt-2">
                    <div className="verticalAlignStyle">
                        <TabPanel value="1">
                            <Home/>
                        </TabPanel>
                        <TabPanel value="2">
                            <Education/>
                        </TabPanel>
                        <TabPanel value="3">
                            <Experience/>
                        </TabPanel>
                        <TabPanel value="4">
                            <Skills/>
                        </TabPanel>
                        <TabPanel value="5">
                            <Projects/>
                        </TabPanel>
                        <TabPanel value="6">
                            <Contact/>
                        </TabPanel>
                    </div>
                </Box>
            </Box>
        </TabContext>
    )
}