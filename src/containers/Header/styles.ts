import styled, { keyframes } from 'styled-components'
import '../../index.css'

export const Cabecalho = styled.header`
    width: 100%;
    height: 70px;
    background-Color: var(--main-color);
    display: flex;
    align-items: center;
`

export const Nav = styled.nav`
    width: 100%;
    padding: 0 10%;
    display: flex;
    justify-content: flex-end;
    gap: 30px;
`

const fade = keyframes`
    100%{
        width: 100%;
    }
`

export const Links = styled.a`
    text-decoration: none;
    color: var(--main-text-color);
    font-size: 18px;
    position: relative;

    &:after{
        position: absolute;
        bottom: 0;
        left: 0;
        content: '';
        width: 0;
        height: 1px;
        background-color: #fff;
    }

    &:hover::after{
        animation: ${fade} .3s ease forwards;
    }
`