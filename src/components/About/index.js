import React from "react";

function About() {
    return (
        <section className="flex-row mb-5">
            <img src={require(`../../assets/images/headshot.jpeg`).default} alt="Headshot of developer" className="headshot"></img>
            <div className="test-width">
                <h2>Cat Heneghan</h2>
                <h3>Web Developer</h3>
                Welcome! My name is Cat Heneghan
                lorems sidnen sldine ido duie skjhh ksjnd sdnfndfjsdiofj sdj djs dfkjhs fd
                lorems sidnen sldine ido sd eiosns aldkd duie skjhh ksjnd sdnfndfjsdiofj sdj djs dfkjhs fd
                lorems sidnen sldine ido duie skjhh ksjnd sdnfndfjsdiofj sdj djs dfkjhs fd
            </div>
        </section>
    )

};

export default About;