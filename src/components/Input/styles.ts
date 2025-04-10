import styled from "styled-components";


export const InputText = styled.input`
    width: ${props => props.width}%;
    color: ${({theme})=> theme.baseText};
    font-size: ${props => props.theme.textS};
    background: ${props => props.theme.baseInput};
    padding: 0.6rem;
    border: 1px solid ${props => props.theme.baseButton};
    border-radius: 4px;
    outline: none;
    
    &:focus {
        border-color: ${props => props.theme.yellowDark};
    }
`