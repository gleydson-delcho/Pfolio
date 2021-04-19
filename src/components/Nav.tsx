import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { NavbarContainer } from '../styles/components/navbar';

const Navbar: React.FC  = () => {

    // const { pathname,  } = useRouter();

    //     let path = '';
    //     if(pathname == '/'){
    //         path = '/';
    //     }else if(pathname == '/projects'){
    //         path = '/projects';
    //     }else if(pathname == '/academy'){
    //         path = '/academy';
    //     }else if(pathname == '/aboutme'){
    //         path = '/aboutme';
    //     }else {
    //         path = '/';
    //     }


        return(
        <NavbarContainer>
            <div className="navContainer" >
                <Link href='/' ><a><h2>Inicial</h2></a></Link>
                <Link href="/projects" ><a><h2>Projetos</h2></a></Link>
                <Link href="/academy" ><a><h2>Acadêmico</h2></a></Link>
                <Link href="/aboutme" ><a><h2>Sobre mim</h2></a></Link>
            </div>
        </NavbarContainer>
    )
};

export default Navbar;