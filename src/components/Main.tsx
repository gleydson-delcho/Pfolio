import React from 'react';
import AboutMe from '../pages/AboutMe';
import Academic from '../pages/Academic';
import Projects from '../pages/Projects';



const Main: React.FC = () => {
    return (        
        <main className="homeContainer">                             
            <AboutMe children/>
            <Academic children />
            <Projects children />
        </main>
    )
};

export default Main;