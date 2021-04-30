import React from 'react';
import styles from './styles.module.scss';
import imageProfile from '../../assets/profile.jpg';
import imageGit from '../../assets/gitHub.png'
import imageLinkedin from '../../assets/linkedin.png'
import imageMail from '../../assets/mail.png'
import Image from 'next/image'
import { FaGithub, FaReact, FaNodeJs, FaJs, FaCss3, FaHtml5 } from 'react-icons/fa';


const Header: React.FC = () => {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.header}>
                <Image width={192} height={192} src={imageProfile} alt="Gleydson" />
                <h2>Gleydson Delcho</h2>
            </div>

            <p>Desenvolvedor Javascript</p>
            
            <p>Estudante de análise e desenvolvimento de sistemas na Universidade Estácio de Sá.</p>

            <div className={styles.skillContainer}>
                <h2>Skills:</h2>
                <div className={styles.skill}>
                    <p>
                        <span>
                            <a><FaHtml5 color="#FF4500"/> </a> HTML 
                            
                        </span>

                        <span>
                            <a><FaCss3 color="#fff"/></a> CSS
                        </span>

                        <span>
                            <a><FaJs color="#FFFF00" /></a> Javascript
                        </span>

                        <span>
                            <a><FaNodeJs color="#32CD32" /></a> NodeJS
                        </span>

                        <span>
                            <a><FaReact color="#00BFFF" /></a> ReactJS
                        </span>
                        <span>
                            <a> <FaGithub color="#fff" /></a> Git
                        </span>
                    </p>
                </div>
                
            </div>
            <footer>
            <div className={styles.link}>
                <a target="blank" href="https://github.com/gleydson-delcho/">
                    <img src={imageGit} alt="GitHub" />
                </a>
                <a target="blank" href="https://www.linkedin.com/in/gleydson-delcho-0b35a679/">
                    <img src={imageLinkedin} alt="Linkedin" />
                </a>
                <a target="blank" href="mailto:gleydson.engenhariacivil@gmail.com">
                    <img src={imageMail} alt="E-mail" />
                </a>
            </div>
            </footer>
        </header>
    );
};

export default Header;