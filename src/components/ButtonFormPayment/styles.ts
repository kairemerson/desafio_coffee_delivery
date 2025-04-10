import styled from "styled-components";


export const ButtonContainer = styled.button`
    display: flex;
    align-items: center;
    background: ${props => props.theme.baseButton};
    font-size: ${props => props.theme.buttonM};
    color: ${props => props.theme.baseText};
    padding: 1rem;
    border: 0;
    border-radius: 6px;
    flex: 1;
    cursor: pointer;
    svg {
        color: ${props => props.theme.purple};
        margin-right: 0.75rem;
    }
`