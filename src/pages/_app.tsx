import React from 'react';
import { AppProps } from 'next/app';

import '../styles/global.scss';
import styles from '../styles/app.module.scss';

import Header from '../components/Header';
import Navbar from '../components/Navigation';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <Navbar />
        <Component {...pageProps} />
      </main>      
    </div>
  )
}

export default MyApp
