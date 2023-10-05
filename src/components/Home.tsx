import React from "react";

import "../styles/home.css"

import {clipart} from "../utils";

export const Home = () => {

    return (
        <div className="home">
            <img className="img-fluid animate__animated animate__fadeInRight" src={clipart} alt="clipart"
                 height="60%" width="60%"/>
            <h4 className="m-5 mb-3">My strong passion is all about creating solutions that go beyond just technology. I want
                to empower and transform things, and I use code as my tool for making that happen. I'm dedicated to
                making myself better by solving problems and making my work smarter, simpler, and more impactful.</h4>
        </div>
    );
}