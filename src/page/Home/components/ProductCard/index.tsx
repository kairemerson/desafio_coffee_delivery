import { AddToCart, CardContainer, FooterCard, Image, PriceFooter, Quantity, Subtitle, Tag, Title } from "./styles";
import tradicional from "../../../../assets/tradicional.png"
import { Minus, Plus, ShoppingCart } from "phosphor-react";

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
                <Quantity>
                    <Minus size={14} color="#8047F8" weight="bold" /> <p>1</p> <Plus size={14} color="#8047F8" weight="bold" />
                </Quantity>

                <AddToCart>
                    <ShoppingCart size={22} fill="#fff" weight="fill"/>
                </AddToCart>
            </FooterCard>

        </CardContainer>
    )
}