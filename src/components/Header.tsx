import React from 'react';

import imageProfile from '../assets/profile.jpg';

const Header: React.FC = () => {
    return (
        <div className="headerContainer">
            <header className="header">
                {/* <img src={imageProfile} alt="Gleydson" /> */}
                <h2>Gleydson Delcho</h2>
            </header>

            <p>Desenvolvedor Javascript</p>
            
            <p>Estudante de análise e desenvolvimento de sistemas na Universidade Estácio de Sá.</p>

            <div className="skillContainer">
                <h2>Skills:</h2>
                <div className="skill">
                    <p>
                        <span>
                            <img src="https://www.flaticon.com/svg/vstatic/svg/1216/1216733.svg?token=exp=1618407020~hmac=5cad0ab369b2fbae08c9cee11aa316e4"
                            alt="HTML" />- HTML 
                            
                        </span>

                        <span>
                            <img src="https://www.flaticon.com/svg/vstatic/svg/732/732190.svg?token=exp=1618408256~hmac=cd076ec62b0885d6cd4bf2e7f068d879"
                            alt="CSS" />- CSS
                        </span>

                        <span>
                            <img src="https://as2.ftcdn.net/jpg/03/54/34/61/500_F_354346144_arRFgI0ERvutnKajTVEnKMaI1DEbNwMo.jpg"
                            alt="JS" />- Javascript
                        </span>

                        <span>
                            <img src="https://www.flaticon.com/svg/vstatic/svg/919/919825.svg?token=exp=1618409350~hmac=e7198adfe99abc691e98cbd63df630aa"
                            alt="NodeJS" />- NodeJS
                        </span>

                        <span>
                            <img src="https://www.flaticon.com/svg/vstatic/svg/1126/1126012.svg?token=exp=1618408763~hmac=e52e0e514a61f00a3bc22553c3f79c6a"
                            alt="ReactJS" />- ReactJS
                        </span>
                        {/* <span>
                            <img src="https://www.flaticon.com/svg/vstatic/svg/1126/1126012.svg?token=exp=1618408763~hmac=e52e0e514a61f00a3bc22553c3f79c6a"
                            alt="ReactJS" />- ReactJS
                        </span> */}
                    </p>
                </div>
                
            </div>

            <div className="link">
                <a target="blank" href="https://github.com/gleydson-delcho/">
                    <img src="https://www.flaticon.com/svg/vstatic/svg/733/733609.svg?token=exp=1618409387~hmac=b41bada3574fc2d88d957e34bc231fa0" alt="GitHub" />
                </a>
                <a target="blank" href="https://www.linkedin.com/in/gleydson-delcho-0b35a679/">
                    <img src="https://www.flaticon.com/svg/vstatic/svg/145/145807.svg?token=exp=1618409933~hmac=c9ad14c8b6560001d8fa718c05b30c6a" alt="GitHub" />
                </a>
                <a target="blank" href="mailto:gleydson.engenhariacivil@gmail.com">
                    <img src="https://www.flaticon.com/svg/vstatic/svg/2913/2913990.svg?token=exp=1618410003~hmac=f355e76c3be2d5cd982b4a10b2e911e3" alt="GitHub" />
                </a>
            </div>
        </div>
    );
};

export default Header;