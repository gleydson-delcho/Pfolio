import React from 'react';
import Image from 'next/image';
import Finance from '../../assets/finance.png'
import Engeneer from '../../assets/engeneer.png';
import styles from '../../styles/components/projects.module.scss';
import Head from 'next/head';


const ProjectsPage: React.FC = () => {
    return (
        <div className={styles.projectsContainer}>
            <Head>
                <title>Home | Projects</title>
            </Head>

            <h1>Projetos</h1>

            <div className={styles.projectInfo}>
                <div className={styles.project}>
                    <Image width={192} height={192} src={Finance} alt="finance" />
                    <h2>Finance</h2>
                    <p>HTML, CSS e Javascript</p>
                </div>
                <div className={styles.project}>
                    <Image width={192} height={192} src={Engeneer} alt="Engeneer" />
                    <h2>Engeneer</h2>
                    <p>ReactJS, Javascript, CSS e HTML</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;