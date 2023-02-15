import React from "react";
import Header from "../../components/Header/Header";
import Home from "../../components/Profile/Profile";
import About from "../../components/About/About";
import RecentWork from "../../components/RecentWork/RecentWork";
import Companies from "../../components/Companies/Companies";
import './HomePage.css'

const HomePage = () => {
    return(
        <div>
            <Header />
            <Home />
            <About/>
            <RecentWork />
            <Companies/>
        </div>
    )
}

export default HomePage;