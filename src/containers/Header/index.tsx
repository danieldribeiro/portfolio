import { Cabecalho, Links, Nav } from './styles'

const Header = () => {
    return(
        <Cabecalho>
            <Nav>
                <Links href="">Sobre</Links>
                <Links href="">Projetos</Links>
                <Links href="">Contato</Links>
            </Nav>
        </Cabecalho>

    )
}

export default Header