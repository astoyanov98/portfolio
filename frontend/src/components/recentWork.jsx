import React from "react";
import Project from "./project";
import GameLogo from '../images/gameLogo.jpg'
import gameOfFourLogo from '../images/gameOfFourLogo.jpg'
import employeeLogo from '../images/employeeLogo.jpg'
import movieLogo from '../images/movieLogo.jpg'
import todoLogo from '../images/todoLogo.jpg'
import weatherLogo from '../images/weatherLogo.jpg'
import Button from './button'
import githubLogo from '../images/githubLogo.png'

const RecentWork = () => {
    return(
        <div className="containerRecentWork">
            <h1>My Recent Work</h1>
            <section>Here are a few past design projects I've worked on. Want to see more? <a href="mailto:a.stoyanov98@abv.bg">Email me</a></section>
            <div className="projectContainer">
                <Project img={todoLogo} url="https://github.com/astoyanov98/TodoApp" text='To Do Game'/>
                <Project img={gameOfFourLogo} url="https://github.com/astoyanov98/Game-of-four" text="Game Of Four"/>
                <Project img={employeeLogo} url="https://github.com/astoyanov98/Employees_project" text="Employee Project"/>
            </div>
            <div className="projectContainer">
                <Project img={movieLogo} url="https://github.com/astoyanov98/movie_collection" text="Movie Project"/>
                <Project img={weatherLogo} url="https://github.com/astoyanov98/forecast" text="Weather Project"/>
                <Project img={GameLogo} url="https://github.com/astoyanov98/rock-paper-scissor" text="Rock Paper Scissor"/>
            </div>
            <div className="buttonRecentWork">
                <Button img={githubLogo} name='More on Github!'/>
            </div>
        </div>
    )
}

export default RecentWork;