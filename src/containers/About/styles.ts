import styled from 'styled-components'
import CodeBkg from '../../assets/images/code-bg.png'


export const AboutSection = styled.section`
    width: 100%;
    height: 100vh;
    background-color: var(--main-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--main-text-color);
    position: relative;
`

export const Title = styled.h2`
    font-size: 54px;
    z-index: 10;
`

export const Paragraph = styled.p`
    font-size: 26px;
    font-weight: lighter;
    z-index: 10;
    filter: drop-shadow(0 0 5px #000);
`

export const CodeBg = styled.img.attrs({src: CodeBkg})<{top?: string; bottom?: string; left?: string; right?: string}>`
    position: absolute;
    top: ${props => props.top};
    bottom: ${props => props.bottom};
    right: ${props => props.right};
    left: ${props => props.left};
    z-index: 0;
    opacity: .8;
    filter: blur(.3em)
`