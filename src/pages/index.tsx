import React from 'react';
import Head from 'next/head'
import Header from '../components/Header';
import Navbar from '../components/Nav';
import Main from '../components/Home';
import { Container } from '../styles/components/container';
import { HeaderContainer } from '../styles/components/header';
import { NavbarContainer } from '../styles/components/navbar';
import { ContentContainer } from '../styles/components/aboutMe';

// As imagens deverão ser importadas como components.

const Home: React.FC = (props) => {
  return (
    <Container>
      <Head>
        <title>Profile | Gleydson Delcho</title>
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