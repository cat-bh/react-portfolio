import React from "react";

function Resume() {
    return (
        <section>
            <h2>Skills</h2>
            <ul className="skills">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>MySQL</li>
                <li>Object-Oriented Programming</li>
            </ul>
            <div>Download my 
                <a href={require("../../assets/resume.pdf").default} 
                    target="_blank" 
                    rel='noreferrer noopener'>
                        resume
                </a>
            </div>
        </section>
    )

};

export default Resume;