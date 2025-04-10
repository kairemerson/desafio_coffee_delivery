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