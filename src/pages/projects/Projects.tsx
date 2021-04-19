import React from 'react';
import Finance from '../../assets/finance.png'
import Engeneer from '../../assets/engeneer.png';
import { ProjectsContainer } from '../../styles/components/projects';


const ProjectsPage: React.FC = () => {
    return (
        <ProjectsContainer>
        <div className="projectsContainer">
            <h1>Projetos</h1>

            <div className="projectInfo">
                <div className="project">
                    <img src={Finance} alt="finance"/>
                    <h2>Finance</h2>
                    <p>HTML, CSS e Javascript</p>
                </div>
                <div className="project">
                    <img src={Engeneer} alt="Engeneer"/>
                    <h2>Engeneer</h2>
                    <p>ReactJS, Javascript, CSS e HTML</p>
                </div>                                
            </div>
            

        </div>
        </ProjectsContainer>
    );
};

export default ProjectsPage;