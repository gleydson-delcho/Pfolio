import React from 'react';

import Head from 'next/head';
import { NextPage } from 'next';

const Main: NextPage = () => {
    return (  
        <>   
        <Head>
        <title>Home | Gleydson Delcho</title>
        </Head>  
    
        <main className="homeContainer">                             
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
};

export default Main;