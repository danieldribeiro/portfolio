import styled from 'styled-components'
import '../../index.css'

export const Cabecalho = styled.header`
    width: 100%;
    height: 90px;
    background-Color: var(--main-color);
    display: flex;
    align-items: center;
`
export const Nav = styled.nav`
    width: 100%;
    padding: 0 10%;
    display: flex;
    justify-content: flex-end;
    gap: 50px;
`
export const Links = styled.a`
    text-decoration: none;
    color: var(--main-text-color);
    position: relative;
    font-size: 24px;
    display: flex;

    &:before{
        position: absolute;
        top: 0;
        left: -15px;
        content: '<';
        width: 0;
        height: 1px;
        opacity: 0;
        color: cyan;
    }

    &:after{
        position: absolute;
        top: 0;
        right: -2px;
        content: '/>';
        width: 0;
        height: 1px;
        background-color: #fff;
        opacity: 0;
        color: cyan;
    }

    &:hover::after,
    &:hover::before{
        opacity: 1;
    }
`