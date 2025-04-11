import styled from "styled-components";


export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5rem;
    background: ${props => props.theme.baseCard};
    width: 16rem;
    height: 19.375rem;
    border-top-right-radius: 30px;
    border-bottom-left-radius: 30px;
`

export const Image = styled.img`
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -36px;
`

export const Tag = styled.div`
    background: ${props => props.theme.yellowLight};
    color: ${props => props.theme.yellowDark};
    font-size: ${props => props.theme.tag};
    padding: 4px 8px;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-radius: 10px;
    font-weight: bold;
`

export const Title = styled.h3`
    font-size: ${props => props.theme.titleS};
    color: ${props => props.theme.baseSubtitle};
`

export const Subtitle = styled.p`
      font-size: ${props => props.theme.textS};
      color: ${props => props.theme.baseLabel};
      text-align: center;
      margin-top: 0.5rem;
`

export const FooterCard = styled.div`
    display: flex;
    width: 90%;
    align-items: center;
    justify-content: space-around;
    margin-top: auto;
`

export const PriceFooter = styled.p`
    font-size: ${props => props.theme.textS};
    color: ${props => props.theme.baseText};
    span{
        font-family: "Baloo 2";
        font-size: ${props => props.theme.titleM};
        color: ${props => props.theme.baseText};
        font-weight: bolder;
        margin-left: 0.3rem;
    }
`

export const AddToCart = styled.div`
    display: flex;
    padding: 0.5rem;
    background: ${props => props.theme.purpleDark};
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s;
    
    &:hover{
        background: ${props => props.theme.purple};

    }
`