import React from 'react';
import Head from 'next/head'
import Header from './Header';
import Navbar from '../components/Nav';
import Main from './main';
import { Container } from '../styles/components/container';
import { HeaderContainer } from '../styles/components/header';
import { NavbarContainer } from '../styles/components/navbar';
import { ContentContainer } from '../styles/components/aboutMe';
import { NextPage } from 'next';




// As imagens deverão ser importadas como components.

const Home: NextPage = () => {
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
        <Main />
      </ContentContainer>
    </Container>

  )
}

export default Home;