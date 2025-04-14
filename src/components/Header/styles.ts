import styled from "styled-components";


export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
    
    
    nav {
        display: flex;
        gap: 0.5rem;
       
        height: 38px;
        a{
            position: relative;
            text-decoration: none;
            display: flex;
            justify-content: center;
            align-items: center;

            &:first-child {
                padding: 0.5rem;
                background: ${props => props.theme.purpleLight};
                border-radius: 6px;
            }
        }
    }

`

export const CartContainer = styled.div`
    padding: 0.5rem;
    background: ${props=>props.theme.yellowLight};
    height: 38px;
`

export const NumberItemsInCart = styled.span`
    background: ${props => props.theme.yellowDark};
    color: ${props => props.theme.white};
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 100%;
    text-align: center;
    padding: 0.2rem 0;
    font-size: ${props => props.theme.textS};
    font-weight: bold;
    position: absolute;
    top: -8px;
    right: -8px;
`