import React, {useState} from "react";
import Projects from '../Projects';

function Work() {

    const [myWork] = useState([
        {
          name: 'Adventure Time',
          image: 'adventure-time.png',
          github: 'https://github.com/mjos7/adventure-time',
          app: 'https://mjos7.github.io/adventure-time/'
        },
        {
            name: 'McKing',
            image: 'mcking.png',
            github: 'https://github.com/mjos7/high-end-fashion-shop',
            app: 'https://alexandra-mcking-shop.herokuapp.com'
        },
    ]);

    return (
        <section className="flex-row space-between">
            {myWork.map(project => (
                <Projects currentWork={project} key={project.name}></Projects>
            ))}
        </section>
    )

};

export default Work;