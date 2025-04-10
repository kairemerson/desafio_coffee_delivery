import styled from "styled-components";


export const CartContainer = styled.div`
    display: flex;
    gap: 2rem;
`

export const InfoOrder = styled.div`
    width: 60%;
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

export const SelectedCoffees = styled.div`
`