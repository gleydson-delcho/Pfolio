import styled from "styled-components";


export const HeaderContainer = styled.div`
          
    
    background: #1C03A8;   
    
    .headerContainer {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    
    .header {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        margin-top: 1rem;
    }

    header img {
        width: 8rem;
        height: 8rem;
        border-radius: 50%;
    }

    h2 {
        margin: 1rem;
        font-size: 2rem;
    }

    .skillContainer {
        display: flex;
        flex-direction: column;
    }

    .skillContainer h2 {
        text-align: center;
    }
    
    .skill {
        display:flex;
    }

    .skill span {
        display: flex;
        margin: 1rem;
    }    

    .skill img {
        margin-right: 0.5rem;
    }

    .skill img:nth-child(2) {
        margin-left: 6rem;
    }

    .skill p img {
        width: 1.2rem;
        height: 1.2rem;
    }

    p {
        text-align: justify;
        margin: 1rem;
    }

    .link {
        display: flex;
        align-items center;
        justify-content: center;
        
        margin-top: 1rem;
    }

    .link a {
        margin: 1rem;
    }
    
    .link img {
        width: 3rem;
        height: 3rem; 
        padding: 0.2rem;
        background: #fff;
        border-radius: 50%;
        cursor: pointer;
    }  
    
    .link img:hover {
        opacity: 0.5;
        transition: 0.4s;
    }
`;