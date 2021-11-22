import React from "react";

function About() {
    return (
        <section className="flex-row align-start mb-5">
            <img src={require(`../../assets/images/headshot.jpeg`).default} alt="Headshot of developer" className="headshot"></img>
            <div className="test-width">
                <h2>Cat Heneghan</h2>
                <h3>Web Developer</h3>
                Welcome! My name is Cat Heneghan, here is some filler text 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
        </section>
    )

};

export default About;