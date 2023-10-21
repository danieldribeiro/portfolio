import { Cabecalho, Links, Nav } from './styles'
import {Moon} from '@styled-icons/heroicons-solid/Moon'

const Header = () => {
    return(
        <Cabecalho>
            <Nav>
                <Links href="#AboutSection">Sobre</Links>
                <Links href="#Skills">Habilidades</Links>
                <Links href="">Projetos</Links>
                <Links href="">Contato</Links>
                <Moon color='#fff' size={25} cursor={'pointer'}></Moon>
            </Nav>
        </Cabecalho>
    )
}

export default Header