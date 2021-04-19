import React from 'react';
import Head from 'next/head'
import Header from '../Header';
import Navbar from '../../components/Nav';
import AboutMePages from './AboutMe';
import { Container } from '../../styles/components/container';
import { HeaderContainer } from '../../styles/components/header';
import { NavbarContainer } from '../../styles/components/navbar';
import { ContentContainer } from '../../styles/components/aboutMe';
import { NextPage } from 'next';

const AboutMe: NextPage = () => {
    return (        
        <Container>
            <Head>
                <title>Academics | Gleydson Delcho</title>
            </Head>

            <HeaderContainer>
                <Header />
            </HeaderContainer>

            <ContentContainer>
                <NavbarContainer>
                    <Navbar />
                </NavbarContainer>
                <AboutMePages />
            </ContentContainer>
        </Container>
    )
};

export default AboutMe;