import React from 'react';


const AboutMe: React.FC = () => {
    return (        
        <div className="contentContainer">            
            
            <h1>Portfólio</h1>
            <div className="presents">       
        
                <h2>Apresentação</h2>
                <p>
                    Durante a pandemia que teve início no ano de 2020 eu tive a oportunidade de contato 
                    com a área de programação. Comecei a desenvolver alguns softwares simples na linguagem JAVA,
                    então comecei a fazer vários cursos online de lógica de programação e orientação a objeto.
                    Com isso acabei caindo em um curso de javascript onde achei muito interessante a ideia de
                    desenvolver páginas web, fui descobrindo aos poucos como tudo isso funcionava e hoje tenho 
                    aprofundado cada vez mais nessa linguagem por meio de eventos que ocorrem. Ainda não tive a 
                    oportunidade profissional estou recebendo propostas e enviando meu currículo em cada 
                    oportunidade na qual meu perfil programador se encaixe. Gosto muito de frontend, já desenvolvi
                    backend com NodeJS e tenho utilizado com frequência essa ferramenta.
                </p>
            </div>

            <div className="experience">
                <h2>Experiências</h2>
                <p>
                    Na área de programação para web a minha experiência está registrada no giHub que pode ser
                    acessado na imagem ao lado. Tenho buscado me aperfeiçoar com eventos, projetos pessoais e
                    ajuda da comunidade.
                    Minhas experiências profissionais registradas são na área administrativa da Universidade
                    Católica de Brasília, onde iniciei como auxiliar de arquivo, nesse cargo as atividades eram 
                    cuidar do arquivo físico de alunos matrículados na instituição, bem como atualizar as
                    informações no sistema interno da Universidade.
                    Na mesma Universidade fui promovido para o cargo de assistente de controle de dados, onde as
                    atividades eram cuidar dos dados cadastrais e processos acadêmicos solicitados por estudantes e 
                    coordenações de cursos, controle de cadastro de turmas e disciplinas no sistema da instituição e
                    trancamento e cancelamento de matrículas.

                </p>
            </div>
            


        </div>
    )
};

export default AboutMe;