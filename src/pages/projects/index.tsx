import React from 'react';
import Head from 'next/head'
import Header from '../Header';
import Navbar from '../../components/Nav';
import ProjectsPage from './Projects';
import { Container } from '../../styles/components/container';
import { HeaderContainer } from '../../styles/components/header';
import { NavbarContainer } from '../../styles/components/navbar';
import { ContentContainer } from '../../styles/components/aboutMe';
import { NextPage } from 'next';

const Projects: NextPage = () => {
    return (
        <Container>
            <Head>
                <title>Home | Gleydson Delcho</title>
            </Head>

            <HeaderContainer>
                <Header />
            </HeaderContainer>

            <ContentContainer>
                <NavbarContainer>
                    <Navbar />
                </NavbarContainer>
                <ProjectsPage />
            </ContentContainer>
        </Container>
    )
};

export default Projects;