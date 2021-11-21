import React from "react";

function Projects({currentWork}) {

    return (
        <article className="card">
            <img src={require(`../../assets/images/${currentWork.image}`).default} 
            alt={currentWork.name}></img>
            <div>
                <h3>{currentWork.name}</h3>
                <span>
                    <a href={currentWork.github} target="_blank" rel='noreferrer noopener'>Github</a>|| 
                    <a href={currentWork.app} target="_blank" rel='noreferrer noopener'>Application</a>
                </span>
            </div>

            
            
        </article>
    )

};

export default Projects;