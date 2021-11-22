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
        {
            name: 'Fab Fitness',
            image: 'fab-fitness.png',
            github: 'https://github.com/cat-bh/fab-four',
            app: 'https://intense-temple-68373.herokuapp.com/'
        },
        {
            name: 'Tech Connect',
            image: 'tech-connect.png',
            github: 'https://github.com/cat-bh/tech-connect-blog',
            app: '/'
        },
        {
            name: 'Run Buddy',
            image: 'run-buddy.png',
            github: 'https://github.com/cat-bh/run-buddy',
            app: 'https://cat-bh.github.io/run-buddy/'
        },
        {
            name: 'Weather App',
            image: 'weather-app.png',
            github: 'https://github.com/cat-bh/weather-app',
            app: 'https://cat-bh.github.io/weather-app/'
        },
    ]);

    return (
        <>
        
        <section className="flex-row space-around mb-5">
            {myWork.map(project => (
                <Projects currentWork={project} key={project.name}></Projects>
            ))}
        </section>
        </>
    )

};

export default Work;