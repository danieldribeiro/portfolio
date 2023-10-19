import { About, AnimatedTitle, Subtitle, TitleContainer, MainImage } from './styles'
import "bootstrap-icons/font/bootstrap-icons.css";

const Sobre = () => {
    return(
        <About>
            <TitleContainer>
                <AnimatedTitle>Olá, meu nome é Daniel.</AnimatedTitle>
                <Subtitle>Seja bem-vindo ao meu portfólio!</Subtitle>
            </TitleContainer>
            <MainImage><i className="bi bi-person"></i></MainImage>
        </About>
    )
}

export default Sobre