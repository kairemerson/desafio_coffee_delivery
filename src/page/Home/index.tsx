import { HomeContainer, IconContainer, Image, Info, InfoContainer, InfoWrapper, Intro, IntroContainer, ProductsContainer, Subtitle, Title } from "./styles";
import principalImage from "../../assets/Imagem.png"
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { CardContainer } from "./components/ProductCard/styles";
import { ProductCard } from "./components/ProductCard";


export function Home() {
    return(
        <HomeContainer>
            <IntroContainer>
                <Intro>
                    <Title>Encontre o café perfeito para qualquer hora do dia</Title>
                    <Subtitle>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</Subtitle>
                    <InfoWrapper>
                        <InfoContainer>
                            <Info>
                                <IconContainer bgColor="yellowDark">
                                    <ShoppingCart size={16} weight="fill" fill="#fff"/>
                                </IconContainer>
                                <p>Compra simples e segura</p>
                            </Info>
                            <Info>
                                <IconContainer bgColor="yellow">
                                    <Timer size={16} weight="fill" fill="#fff"/>
                                </IconContainer>
                                <p>Entrega rápida e rastreada</p>
                            </Info>
                        </InfoContainer>

                        <InfoContainer>
                            <Info>
                                <IconContainer bgColor="background">
                                    <Package size={16} weight="fill" fill="#fff"/>
                                </IconContainer>
                                <p>Embalagem mantém o café intacto</p>
                            </Info>

                            <Info>
                                <IconContainer bgColor="purple">
                                    <Coffee size={16} weight="fill" fill="#fff"/>
                                </IconContainer>
                                <p>O café chega fresquinho até você</p>
                            </Info>
                        </InfoContainer>

                    </InfoWrapper>

                </Intro>
                
                <Image src={principalImage}></Image>
            </IntroContainer>
            <ProductsContainer>
                <h2>Nossos cafés</h2>
                <CardContainer>
                    <ProductCard/>
                </CardContainer>
            </ProductsContainer>
        </HomeContainer>
    )
}