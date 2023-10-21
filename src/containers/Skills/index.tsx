import { SkillsSection, Title, Paragraph, CodeBg, SkillsBg } from './styles'

const Skills = () => {

    return(
        <SkillsSection id='Skills'>
            <Title>Habilidades</Title>
            <Paragraph>
                Atuo na área de Desenvolvimento Front-End.
                <br /> 
                Foco voltado para aplicações web com utilização de diversas linguagens, bibliotecas e frameworks.
            </Paragraph>
            
            <CodeBg top='-25%' left='0'></CodeBg>
            <SkillsBg></SkillsBg>
        </SkillsSection>
    )
}

export default Skills