import React from 'react';

const Home: React.FC = (props) => {
    return (        
        <main className="homeContainer"> 
            <p>HOME</p>                  
            {props.children}
        </main>
    )
};

export default Home;