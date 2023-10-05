import React from 'react';
import './styles/App.css';
import {ThemeProvider, createTheme} from '@mui/material/styles';

import {Navbar} from './components/Navbar'
import {Greeting} from "./components/Greeting";
import {DataComponent} from "./components/DataComponent";


const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: "rgba(173,197,222,0.73)"
        }
    },
});

function App() {

    return (
        <div className="App">
            <ThemeProvider theme={darkTheme}>
                <Navbar/>
                <div className="container-xxl text-center">
                    <div className="row row-cols-xl-auto">
                        <div className="col-xl-3 col-md-3 col-12 p-0 m-0">
                            <Greeting/>
                        </div>
                        <div className="col-xl-9 col-md-9 col-12 m-0 p-0">
                            <DataComponent/>
                        </div>
                    </div>
                </div>
            </ThemeProvider>
        </div>
    );
}

export default App;
