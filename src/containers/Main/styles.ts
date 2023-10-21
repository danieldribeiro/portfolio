import styled, { keyframes } from 'styled-components'
import dottedBg  from '../../assets/images/dotted-bg.png'


export const About = styled.section`
    width: 100%;
    height: calc(100vh - 90px);
    background-color: var(--main-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--main-text-color);
    padding: 0 10%;
    background-image: url('${dottedBg}');
    background-repeat: no-repeat;
    background-position: 260% 50%;
`

const typewriter = keyframes `
    to{
        left: 100%;
    }
`

const blink = keyframes `
    to{
        opacity: 1;
        background: transparent;
    }
`

const vanish = keyframes `
    to{
        opacity: 0;
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
        animation: ${typewriter} 1.5s steps(25) 1s forwards;
    }

    &:after{
        width: 0.05em;
        background: var(--main-text-color);
        animation: 
        ${typewriter} 1.5s steps(25) 1s forwards,
        ${blink} 0.75s steps(25) infinite,
        ${vanish} .1s  2.5s forwards;
    }
`

export const Subtitle = styled.p`
    color: var(--main-text-color);
    font-size: 2rem;
    font-weight: 400;
    opacity: 0;
    transform: translateY(3rem);
    animation: ${fadeInUp} 1s 3.5s forwards;
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const MainImage = styled.img`
    width: 500px;
    height: 500px;
    border-radius: 65% 33% 66% 34% / 30% 36% 64% 70%;
    background: url('https://github.com/danieldribeiro.png');
    background-size: cover;
    box-shadow: 0 0 20px 1px rgba(255,255,255,.5);
    z-index: 10;
`

export const Description = styled.p`
    font-weight: ligh;
    color: var(--main-text-color);
    font-size: 24px;
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
        animation: ${typewriter} 1s steps(25) 2.5s forwards;
    }

    &:after{
        width: 0.1em;
        background: var(--main-text-color);
        animation:
        ${vanish} .1s forwards,
        ${typewriter} 1s steps(25) 2.5s forwards,
        ${blink} 0.75s steps(25) 2.5s infinite;
    }
`