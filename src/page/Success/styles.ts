import styled from "styled-components";


export const SuccessContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 5rem;
` 

export const InfoSuccess = styled.div`
    h2{
        font-family: "Baloo 2";
        font-size: ${props => props.theme.titleL};
        color: ${props => props.theme.yellowDark};
    }
    p{
        font-size: ${props => props.theme.titleS};
        color: ${props => props.theme.baseSubtitle};
    }
`

export const InfoOrder = styled.div`
    width: 100%;
    border: 1px solid;
    border-radius: 6px 36px;
    border-color: transparent;
    background-origin: border-box;
    background-image: ${props => `linear-gradient(to bottom right, ${props.theme.yellow}, ${props.theme.purple})`};
    margin-top: 2.5rem;
`

export const InfoContent = styled.div`
    background-color: ${props => props.theme.white};
    border-radius: 6px 36px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2.5rem;

    & > div{
        display: flex;
        align-items: center;
        gap: 0.75rem;

        & > div{
            display: flex;
            flex-direction: column;
        }

        svg {
            padding: 0.5rem;
            color: ${props => props.theme.white};
            border-radius: 100%;
        }
    }
`