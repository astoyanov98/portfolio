import React from "react";
import Header from "../components/header";
import Home from "../components/home";
import About from "../components/about";
import RecentWork from "../components/recentWork";

const HomePage = () => {
    return(
        <div>
            <Header />
            <Home />
            <About/>
            <RecentWork />
        </div>
    )
}

export default HomePage;