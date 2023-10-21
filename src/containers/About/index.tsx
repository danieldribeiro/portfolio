import { AboutSection, Title, Paragraph, CodeBg } from './styles'

const About = () =>{

    return(
        <AboutSection id="AboutSection">
            <Title>Sobre mim</Title>
            <Paragraph>
                Desenvolvedor front-end apaixonada por transformar designs em interfaces interativas e atraentes;
                <br /> 
                Minha missão é criar experiências visuais memoráveis que cativam e envolvem os usuários, tornando a web um lugar mais bonito e funcional;
                <br />
                Formado em Análise e desenvolvimento de sistemas mas sempre em busca de novos conhecimentos e aprimoramentos;
                <br />
                Atualmente aluno do Curso Engenheiro Front-End pela EBAC e Desenvolvedor Full-Stack pela STEP IT Computer Academy;
            </Paragraph>

            <CodeBg top='-25%' right='0'></CodeBg>
        </AboutSection>
    )
}

export default About