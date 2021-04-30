import React from 'react';
import Head from 'next/head'

import styles from './home.module.scss';

import { NextPage } from 'next';




// As imagens deverão ser importadas como components.

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Gleydson Delcho</title>
      </Head>

      <main className={styles.homeContainer}>
        <h1>Olá</h1>
        <p>
          Meu nome é Gleydson Delcho, sou desenvolvedor web tenho me dedicado as tecnologias: ReactJS,
          NextJS, NodeJS.
        </p>
        <p>
          Sou de Brasília-DF e busco uma oportunidade de trabalhar com programação.
        </p>
      </main>
    </>
  )
}

export default Home;