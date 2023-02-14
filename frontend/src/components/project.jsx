import React from "react";

const Project = ({img, url, text}) => {
    return(
        <div className="imgContainer">
            <a href={url}>
                <img height='100%' width="100%" src={img} alt="" />
                <div className="text">{text}</div>
            </a>
        </div>
    )
}

export default Project;