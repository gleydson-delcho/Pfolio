import styled from "styled-components";

export const ProjectsContainer = styled.div`
    .projectsContainer {
        border-top: 3px solid #fff;
        margin: 0 3rem;
    }

    .projectsContainer h1 {
        text-align: center;
        margin: 1rem 0;
    }

    .projectInfo {
        display: flex;
        justify-content: space-between;
        
        flex-wrap: wrap;
    }

    .project{
        width: 15rem;
        height: 10rem;

        margin-right: 3rem;
        margin-bottom: 5rem;

        
    }

    .project img {
        width: 15rem;
        height: 10rem;
    }

    .project h2, p {
        text-align:center;
        margin-top: 0.4rem;
    }
`;