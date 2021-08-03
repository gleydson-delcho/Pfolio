import React from 'react';
import Link from 'next/link';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa'

import styles from './styles.module.scss';
import { useState } from 'react';

const Navbar: React.FC = () => {

    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        if (toggle === false) {
            setToggle(true);
        } else {
            setToggle(false)
        }
    }

    return (

        <div className={styles.navContainer} >
            <Link href='/' ><a><h2>Inicial</h2></a></Link>
            <Link href="/projects" ><a><h2>Projetos</h2></a></Link>
            <div className={styles.navBlock}>
                <span>
                    Tecnologias
                    <button onClick={handleToggle}>
                        {toggle ? <FaAngleUp /> : <FaAngleDown />}
                    </button>
                </span>
                {
                    toggle &&
                    <div className={styles.blockHidden}>
                        <Link href="/react">React</Link>
                        <Link href="/next">Next</Link>
                        <Link href="/java">Java</Link>
                        <Link href="/node">NodeJs</Link>
                    </div>
                }
            </div>
            <Link href="/academy" ><a><h2>Acadêmico</h2></a></Link>
            <Link href="/aboutme" ><a><h2>Sobre mim</h2></a></Link>
        </div>

    )
};

export default Navbar;