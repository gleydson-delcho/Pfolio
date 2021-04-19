import React from 'react';
import Head from 'next/head'
import Header from '../Header';
import Navbar from '../../components/Nav';
import AcademyPages from './Academy';
import { Container } from '../../styles/components/container';
import { HeaderContainer } from '../../styles/components/header';
import { NavbarContainer } from '../../styles/components/navbar';
import { ContentContainer } from '../../styles/components/aboutMe';
import { NextPage } from 'next';

const Academic: NextPage = () => {
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
                <AcademyPages />
            </ContentContainer>
        </Container>
    )
};

export default Academic;