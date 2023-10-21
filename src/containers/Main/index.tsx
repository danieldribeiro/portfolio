import { About, AnimatedTitle, Subtitle, TitleContainer, MainImage, Description } from './styles'

const Sobre = () => {
    return(
        <About>
            <TitleContainer>
                <AnimatedTitle>Olá, meu nome é Daniel;</AnimatedTitle>
                <Description>
                    &lt;Desenvolvedor Front-End/&gt;
                </Description>
                <Subtitle>Seja bem-vindo ao meu portfólio!</Subtitle>
            </TitleContainer>
            <MainImage></MainImage>
        </About>
    )
}

export default Sobre