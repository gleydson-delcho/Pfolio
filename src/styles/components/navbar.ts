import styled from "styled-components";

export const NavbarContainer = styled.div`
    .navContainer {
        display: flex;
        justify-content: space-between;
        align-items: center;

        margin: 2rem;

    }
    
    .navContainer a {        
        text-decoration: none;
        color: #e1e1e6;
    }
    
    .navContainer a:hover {
        color: #1C03A8;
        transition: 0.4s;
    }

`;