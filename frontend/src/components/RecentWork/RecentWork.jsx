import React from "react";
import Project from "../Project/Project";
import GameLogo from '../../images/gameLogo.jpg'
import gameOfFourLogo from '../../images/gameOfFourLogo.jpg'
import employeeLogo from '../../images/employeeLogo.jpg'
import movieLogo from '../../images/movieLogo.jpg'
import todoLogo from '../../images/todoLogo.jpg'
import weatherLogo from '../../images/weatherLogo.jpg'
import Button from '../Button/button'
import githubLogo from '../../images/githubLogo.png'

const RecentWork = () => {
    const handleClick = () => {
        window.location.href = 'https://github.com/astoyanov98';
    }

    return(
        <div className="">
            <h1 className="pt-5">My Recent Work</h1>
            <section className="mb-5">Here are a few past design projects I've worked on. Want to see more? <a href="mailto:a.stoyanov98@abv.bg">Email me</a></section>
            <div className="row justify-content-center">
                <div className="col-md-2 mb-4">
                    <Project img={todoLogo} url="https://github.com/astoyanov98/TodoApp" text='To Do Game'/>
                </div>
                <div className="col-md-2 mb-4">
                    <Project img={gameOfFourLogo} url="https://github.com/astoyanov98/Game-of-four" text="Game Of Four"/>
                </div>
                <div className="col-md-2 mb-4">
                    <Project img={employeeLogo} url="https://github.com/astoyanov98/Employees_project" text="Employee Project"/>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-2 mb-4">
                        <Project img={movieLogo} url="https://github.com/astoyanov98/movie_collection" text="Movie Project"/>
                    </div>
                    <div className="col-md-2 mb-4">
                        <Project img={weatherLogo} url="https://github.com/astoyanov98/forecast" text="Weather Project"/>
                    </div>
                    <div className="col-md-2 mb-4">
                        <Project img={GameLogo} url="https://github.com/astoyanov98/rock-paper-scissor" text="Rock Paper Scissor"/>
                </div>
            </div>
            <div className="mt-5">
                <Button onClick={handleClick} img={githubLogo} name='More on Github!'/>
            </div>
        </div>
    )
}

export default RecentWork;