import styled from "styled-components";


export const Quantity = styled.div`
    background: ${props => props.theme.baseButton};
    max-width: 4.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.6rem 0.5rem;
    border-radius: 6px;


    svg {
        cursor: pointer;
        color: ${props => props.theme.purple};
        
        &:hover{
            color: ${props => props.theme.purpleDark};

        }
    }
   
    p{
        font-size: ${props => props.theme.textM};
        color: ${props => props.theme.baseTitle};
    }
`