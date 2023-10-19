import styled, { keyframes } from 'styled-components'


export const About = styled.section`
    width: 100vw;
    height: calc(100vh - 70px);
    background-color: var(--main-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--main-text-color);
    padding: 0 10%;
`

const typewriter = keyframes `
    to{
        left: 100%;
    }
`

const blink = keyframes `
    to{
        background: transparent;
    }
`

const fadeInUp = keyframes `
    to{
        opacity: 1;
        transform: translateY(0);
    }
`

export const AnimatedTitle = styled.h1`
    font-size: clamp(1rem, 3vw + 1rem, 4rem);
    position: relative;

    &:before,
    &:after{
        content:'';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }

    &:before{
        background: var(--main-color);
        animation: ${typewriter} 3s steps(25) 1s forwards;
    }

    &:after{
        width: 0.05em;
        background: var(--main-text-color);
        animation: 
        ${typewriter} 3s steps(25) 1s forwards,
        ${blink} 0.75s steps(25) infinite;
    }
`

export const Subtitle = styled.p`
    color: var(--main-text-color);
    font-size: 2rem;
    font-weight: 400;
    opacity: 0;
    transform: translateY(3rem);
    animation: ${fadeInUp} 1s 4.5s forwards;
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
`

export const MainImage = styled.image`
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background-color: var(--main-text-color)
`