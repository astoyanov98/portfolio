import React from "react";
import Header from "../../components/Header/Header";
import Home from "../../components/Profile/Profile";
import About from "../../components/About/About";
import RecentWork from "../../components/RecentWork/RecentWork";
import Companies from "../../components/Companies/Companies";
import Footer from '../../components/Footer/Footer'
import './HomePage.css'

const HomePage = () => {
    return(
        <div>
            <Header />
            <Home />
            <About/>
            <RecentWork />
            <Companies/>
            <Footer />
        </div>
    )
}

export default HomePage;