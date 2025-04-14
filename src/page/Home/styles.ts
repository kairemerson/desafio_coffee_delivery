import styled, { css, DefaultTheme } from "styled-components";


export const HomeContainer = styled.main`
    padding: 5.875rem 0;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    
`

export const IntroContainer = styled.div`
 display: flex;
`

export const Intro = styled.div`
    width: 597px;

`

export const Title = styled.h1`
    font-family: "Baloo 2";
    color: ${props =>props.theme.baseTitle};
    font-size: ${props =>props.theme.titleXl};
    font-weight: bolder;
    margin: 1rem 0;
`

export const Subtitle = styled.p`
    font-size: ${props => props.theme.textL};

`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    flex-wrap: wrap;
    margin-top: 4.125rem;
`

export const InfoWrapper = styled.div`
    display: flex;
    gap: 2.5rem;
`

export const Info = styled.div`
    display: flex;
    align-items: center;

`

interface Icon {
    bgColor: "yellowDark" | "background" | "yellow" | "purple" 
}

const variant = {
    yellowDark: ( theme: DefaultTheme) => css`
     background: ${theme.yellowDark};
    `,
    yellow: ( theme: DefaultTheme) => css`
     background: ${theme.yellow};
    `,
    background: ( theme: DefaultTheme) => css`
     background: ${theme.baseText};
    `,
    purple: ( theme: DefaultTheme) => css`
     background: ${theme.purple};
    `
}

export const IconContainer = styled.div<Icon>`
    ${({theme, bgColor})=> css`
        display: flex;
        justify-content: center;
        align-items: center;
        ${variant[bgColor](theme)}
        border-radius: 100%;
        width: 2rem;
        height: 2rem;
        margin-right: 0.75rem;
        p {
            font-size: ${theme.textM};

        }
    `}
`

export const Image = styled.img`
    width: 29.75rem;
    height: 22.5rem;
`

export const ProductsContainer = styled.div`
    padding: 2rem 0;

    h2 {
        font-family: "Baloo 2";
        color: ${props=> props.theme.baseTitle};
        font-size: ${props => props.theme.titleL};
        padding: 2rem 0;
    }
`

export const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
`