import styled from 'styled-components'


export const Container = styled.label`
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 5px;
  border-radius: 6px;
  border: 1px solid transparent;
  background-color: ${({ theme }) => theme.baseButton};
  color: ${({ theme }) => theme.baseText};
  text-transform: uppercase;
  font-size: ${props => props.theme.buttonM};
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.baseHover};
  }

  &[data-state='true'] {
    background-color: ${({ theme }) => theme.purpleLight};
    border-color: ${({ theme }) => theme.purple};
  }

  input {
    display: none;
  }

  svg {
    color: ${({ theme }) => theme.purple};
  }
`