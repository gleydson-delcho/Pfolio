import React from 'react';
import Link from 'next/link';

import styles from './styles.module.scss';

const Navbar: React.FC  = () => {

        return(
        
            <div className={styles.navContainer} >
                <Link href='/' ><a><h2>Inicial</h2></a></Link>
                <Link href="/projects" ><a><h2>Projetos</h2></a></Link>
                <Link href="/academy" ><a><h2>Acadêmico</h2></a></Link>
                <Link href="/aboutme" ><a><h2>Sobre mim</h2></a></Link>
            </div>
        
    )
};

export default Navbar;