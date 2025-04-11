import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash } from "phosphor-react";
import { AddressContainer, ButtonsContainer, CartContainer, Coffee, CoffeeButons, CoffeeTitle, ConfirmButton, InfoOrder, PaymentContainer, SelectedCoffees, SelectedCoffeesContainer, Subtitle, Title, TitleForm, TitlePayment, TotalContainer } from "./styles";
import { InputText } from "../../components/Input/styles";
import { ButtonFormPayment } from "../../components/ButtonFormPayment";
import tradicional from "../../assets/tradicional.png"
import { ButtonQuantity } from "../../components/ButtonQuantity";


export function Cart() {
    return (
        <CartContainer>
            <InfoOrder>
                <h4>Complete seu pedido</h4>
                <AddressContainer>
                    <TitleForm>
                        <MapPinLine size={22} />
                        <div>
                            <Title>Endereço de Entrega</Title>
                            <Subtitle>Informe o endereço onde deseja receber seu pedido</Subtitle>

                        </div>
                    </TitleForm>
                    <form id="order">
                        <InputText placeholder="CEP" width={35}/>
                        <InputText placeholder="Rua" width={100}/>
                        <div style={{display: "flex", gap: "0.75rem"}}>
                            <InputText placeholder="Número" width={35}/>
                            <InputText placeholder="Complemento" width={65}/>

                        </div>
                        <div style={{display: "flex", gap: "0.75rem"}}>
                            <InputText placeholder="Bairro" width={35}/>
                            <InputText placeholder="Cidade" width={53}/>
                            <InputText placeholder="UF" width={10}/>

                        </div>
                    </form>

                </AddressContainer>
                <PaymentContainer>
                    <TitlePayment>
                        <CurrencyDollar size={22} />
                        <div>
                            <Title>Pagamento</Title>
                            <Subtitle>O pagamento é feito na entrega. Escolha a forma que deseja pagar</Subtitle>
                        </div>
                    </TitlePayment>
                    <ButtonsContainer>
                        <ButtonFormPayment>
                            <CreditCard size={16}/>
                            <p>CARTÃO DE CRÉDITO</p>
                        </ButtonFormPayment>
                        <ButtonFormPayment>
                            <Bank size={16}/>
                            <p>CARTÃO DE DÉBITO</p>
                        </ButtonFormPayment>
                        <ButtonFormPayment>
                            <Money size={16}/>
                            <p>DINHEIRO</p>
                        </ButtonFormPayment>
                    </ButtonsContainer>
                </PaymentContainer>
            </InfoOrder>
            <SelectedCoffeesContainer>
                <h4>Cafés selecionados</h4>

                <SelectedCoffees>
                    <Coffee>
                        <div>
                            <img src={tradicional}/>
                            <div>
                                <CoffeeTitle>Expresso Tradicional</CoffeeTitle>
                                <CoffeeButons>
                                    <ButtonQuantity/>
                                    <button>
                                        <Trash size={16}/>
                                        <p>REMOVER</p>
                                    </button>
                                </CoffeeButons>
                            </div>
                        </div>
                        <span>R$ 9,90</span>
                    </Coffee>
                    <Coffee>
                        <div>
                            <img src={tradicional}/>
                            <div>
                                <CoffeeTitle>Expresso Tradicional</CoffeeTitle>
                                <CoffeeButons>
                                    <ButtonQuantity/>
                                    <button>
                                        <Trash size={16}/>
                                        <p>REMOVER</p>
                                    </button>
                                </CoffeeButons>
                            </div>
                        </div>
                        <span>R$ 9,90</span>
                    </Coffee>
                    <TotalContainer>
                        <div><p>Total de itens</p><p>R$ 29,70</p></div>
                        <div><p>Entrega</p><p>R$ 3,50</p></div>
                        <div><span>Total</span><span>R$ 33,20</span></div>
                    </TotalContainer>
                    <ConfirmButton type="submit" form="order">
                        CONFIRMAR PEDIDO
                    </ConfirmButton>
                </SelectedCoffees>

            </SelectedCoffeesContainer>
        </CartContainer>
    )
}