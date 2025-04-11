import { AddToCart, CardContainer, FooterCard, Image, PriceFooter, Subtitle, Tag, Title } from "./styles";
import tradicional from "../../../../assets/tradicional.png"
import { ShoppingCart } from "phosphor-react";
import { ButtonQuantity } from "../../../../components/ButtonQuantity";

export function ProductCard() {
    return (
        <CardContainer>
            <Image src={tradicional}/>
            <Tag>TRADICIONAL</Tag>
            <Title>Expresso Tradicional</Title>
            <Subtitle>O tradicional café feito com água quente e grãos moídos</Subtitle>
            <FooterCard>
                <PriceFooter>
                    R$
                    <span>9,90</span>
                </PriceFooter>
                <ButtonQuantity/>

                <AddToCart>
                    <ShoppingCart size={22} fill="#fff" weight="fill"/>
                </AddToCart>
            </FooterCard>

        </CardContainer>
    )
}