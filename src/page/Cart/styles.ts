import styled from "styled-components";


export const CartContainer = styled.div`
    display: flex;
    gap: 2rem;
`

export const InfoOrder = styled.div`
    width: 58%;
    h4 {
        font-size: ${props => props.theme.titleXS};
        color: ${props => props.theme.baseSubtitle};
        font-family: "Baloo 2";
    }
    svg {
        color: ${props => props.theme.yellowDark};
        margin-right: 0.5rem;
    }
`

export const AddressContainer = styled.div`
    background: ${props => props.theme.baseCard};
    padding: 2.5rem;
    
    form{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`

export const PaymentContainer = styled.div`
    background: ${props => props.theme.baseCard};
    padding: 2.5rem;
    margin-top: 0.75rem;
    
    svg {
        color: ${props => props.theme.purple};
    }
`

export const PaymentOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }
`

export const TitlePayment = styled.div`
    display: flex;
    margin-bottom: 2rem;
`

export const TitleForm = styled.div`
    display: flex;
    margin-bottom: 2rem;
`

export const Title = styled.p`
    font-size: ${props => props.theme.textM};
    color: ${props => props.theme.baseSubtitle};
    margin-bottom: 2px;
`

export const Subtitle = styled.p`
    font-size: ${props => props.theme.textS};
    color: ${props => props.theme.baseText};
`

export const ButtonsContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 0.75rem;
`

export const SelectedCoffeesContainer = styled.div`
    width: 36%;
    flex: 1;
    h4 {
        font-size: ${props => props.theme.titleXS};
        color: ${props => props.theme.baseSubtitle};
        font-family: "Baloo 2";
    }
`

export const SelectedCoffees = styled.div`
    background: ${props => props.theme.baseCard};
    padding: 2.5rem;
    border-top-right-radius: 30px;
    border-bottom-left-radius: 30px;
    
`

export const Coffee = styled.div`
    display: flex;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid ${props => props.theme.baseButton};
    
    &:not(:first-child){
        margin-top: 1.5rem;
    }
    
    & > div {
        display: flex;
        flex: 1;
        div{
            flex: 1;
          
        }
    }
    img {
        width: 4rem;
        height: 4rem;
        margin-top: -3px;
        margin-right: 1.25rem;
    }
    span{
        font-size: ${props => props.theme.textM};
        color: ${props => props.theme.baseText};
        font-weight: bold;
    }
    
`

export const CoffeeTitle= styled.p`
    margin-bottom: 0.5rem;
    font-size: ${props => props.theme.textM};
    color: ${props => props.theme.baseSubtitle};
`

export const CoffeeButons = styled.div`
    display: flex;
    gap: 0.5rem;

    button {
        display: flex;
        height: 2rem;
        justify-content: center;
        align-items: center;
        background: ${props => props.theme.baseButton};
        padding: 0 0.5rem;
        border: 0;
        border-radius: 6px;
        font-size: ${props => props.theme.buttonM};
        color: ${props => props.theme.baseText};
        line-height: 2;
        cursor: pointer;
        transition: all 0.2s;
        
        &:hover{
            background: ${props => props.theme.baseHover};

        }
        
        svg {
            margin-right: 0.25rem;
            color: ${props => props.theme.purple};
        }
    }
    
    div{
        height: 2rem;
    }
`

export const TotalContainer = styled.div`
    margin-top: 1.25rem;
    font-size: ${props => props.theme.textS};
    color: ${props => props.theme.baseText};
    div{
        display: flex;
        justify-content: space-between;
        p{
            margin-bottom: 0.75rem;
            &:nth-child(2){
                font-size: ${props => props.theme.textM};
            }
        }
        span {
            font-size: ${props => props.theme.textL};
            color: ${props => props.theme.baseSubtitle};
            font-weight: bold;
        }
    }
`

export const ConfirmButton = styled.button`
    padding: 0.75rem 0.5rem;
    background: ${props => props.theme.yellow};
    border: 0;
    color: ${props => props.theme.white};
    font-size: ${props => props.theme.buttonG};
    font-weight: 500;
    width: 100%;
    outline: none;
    border-radius: 6px;
    margin-top: 1.5rem;
    cursor: pointer;
    transition: all 0.2s;

    &:hover{
        background: ${props => props.theme.yellowDark};
    }
`

export const PaymentErrorMessage = styled.p`
  font-weight: 400;
  color: red;
`