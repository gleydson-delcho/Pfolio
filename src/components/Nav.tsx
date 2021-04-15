import React from 'react';
import Link from 'next/link';


const Navbar: React.FC  = (props) => {
    return(
        <div className="navContainer">
            <Link href="/" ><a><h2>Inicial</h2></a></Link>
            <Link href="/components/projects" ><a><h2>Projetos</h2></a></Link>
            <Link href="/components/academic" ><a><h2>Acadêmico</h2></a></Link>
            <Link href="/components/AboutMe" ><a><h2>Sobre mim</h2></a></Link>
        </div>
    )
};

export default Navbar;