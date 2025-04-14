import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash } from "phosphor-react";
import { AddressContainer, ButtonsContainer, CartContainer, Coffee, CoffeeButons, CoffeeTitle, ConfirmButton, InfoOrder, PaymentContainer, PaymentErrorMessage, PaymentOptions, SelectedCoffees, SelectedCoffeesContainer, Subtitle, Title, TitleForm, TitlePayment, TotalContainer } from "./styles";

import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import * as zod from "zod"

import {coffees} from "../../../data.json"

import { InputText } from "../../components/Input/styles";
import { ButtonFormPayment } from "../../components/ButtonFormPayment";
import { ButtonQuantity } from "../../components/ButtonQuantity";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartProvider";
import { Radio } from "../../components/Radio";

const newOrderSchema = zod.object({
    // cep: zod.number({ invalid_type_error: 'Informe o CEP' }),
    cep: zod.number(),
    rua: zod.string().min(1, 'Informe a rua'),
    numero: zod.string().min(1, 'Informe o número'),
    complemento: zod.string(),
    bairro: zod.string().min(1, 'Informe o bairro'),
    cidade: zod.string().min(1, 'Informe a cidade'),
    uf: zod.string().min(1, 'Informe a UF'),
    paymentMethod: zod.enum(['credit', 'debit', 'cash'], {
        invalid_type_error: 'Informe um método de pagamento',
    }),
})

export type newOrderData = zod.infer<typeof newOrderSchema>

const shippingPrice = 3.5

export function Cart() {

    const {cart, incrementItem, decrementItem, checkout, removeItem} = useContext(CartContext)

    const coffeesInCart = cart.map((item)=> {
        const coffeeInfo = coffees.find((coffee)=> coffee.id === item.id)

        if (!coffeeInfo) {
            throw new Error("invalid coffee")
        }

        return{
            ...coffeeInfo,
            quantity: item.quantity
        }
    })

    const totalItemsPrice = coffeesInCart.reduce((prev, current) =>{
        return (prev += current.price * current.quantity)
    }, 0)

    const {register, handleSubmit, watch, formState} = useForm<newOrderData>({
        resolver: zodResolver(newOrderSchema)
    })

    const selectedPaymentMethod = watch('paymentMethod')


    function handleIncrementItem(itemId: string) {
        incrementItem(itemId)
    }
    
    function handleDecrementItem(itemId: string) {
        decrementItem(itemId)
    }
    
    function handleRemoveItem(itemId: string){
        removeItem(itemId)
    }

    function handleCreateNewOrder(data) {
        
        checkout(data)
    }


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
                    <form id="order" onSubmit={handleSubmit(handleCreateNewOrder)}>
                        <InputText type="number" placeholder="CEP" width={35} {...register("cep", {valueAsNumber: true})}/>
                        {formState.errors.cep && <p>{formState.errors.cep.message}</p>}
                        <InputText placeholder="Rua" width={100} {...register("rua")}/>
                        {formState.errors.rua && <p>{formState.errors.rua.message}</p>}
                        <div style={{display: "flex", gap: "0.75rem"}}>
                            <InputText placeholder="Número" width={35} {...register("numero")}/>
                            {formState.errors.numero && <p>{formState.errors.numero.message}</p>}
                            <InputText placeholder="Complemento" width={65} {...register("complemento")}/>
                            {formState.errors.complemento && <p>{formState.errors.complemento.message}</p>}

                        </div>
                        <div style={{display: "flex", gap: "0.75rem"}}>
                            <InputText placeholder="Bairro" width={35} {...register("bairro")}/>
                            {formState.errors.bairro && <p>{formState.errors.bairro.message}</p>}
                            <InputText placeholder="Cidade" width={53} {...register("cidade")}/>
                            {formState.errors.cidade && <p>{formState.errors.cidade.message}</p>}
                            <InputText placeholder="UF" width={10} {...register("uf")}/>
                            {formState.errors.uf && <p>{formState.errors.uf.message}</p>}

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

                    {/* <ButtonsContainer>
                        <ButtonFormPayment {...register("paymentMethod")}>
                            <CreditCard size={16}/>
                            <p>CARTÃO DE CRÉDITO</p>
                        </ButtonFormPayment>
                        <ButtonFormPayment {...register("paymentMethod")}>
                            <Bank size={16}/>
                            <p>CARTÃO DE DÉBITO</p>
                        </ButtonFormPayment>
                        <ButtonFormPayment {...register("paymentMethod")}>
                            <Money size={16}/>
                            <p>DINHEIRO</p>
                        </ButtonFormPayment>
                    </ButtonsContainer> */}

                    <PaymentOptions>
                        <div>
                            <Radio
                                isSelected={selectedPaymentMethod === 'credit'}
                                {...register('paymentMethod')}
                                value="credit"
                            >
                                <CreditCard size={16} />
                                <span>Cartão de crédito</span>
                            </Radio>

                            <Radio
                                isSelected={selectedPaymentMethod === 'debit'}
                                {...register('paymentMethod')}
                                value="debit"
                            >
                                <Bank size={16} />
                                <span>Cartão de débito</span>
                            </Radio>

                            <Radio
                                isSelected={selectedPaymentMethod === 'cash'}
                                {...register('paymentMethod')}
                                value="cash"
                            >
                                <Money size={16} />
                                <span>Dinheiro</span>
                            </Radio>
                        </div>

                        {formState.errors.paymentMethod ? (
                            <PaymentErrorMessage role="alert">
                            {formState.errors.paymentMethod.message}
                            </PaymentErrorMessage>
                        ) : null}
                    </PaymentOptions>

                </PaymentContainer>
            </InfoOrder>
            <SelectedCoffeesContainer>
                <h4>Cafés selecionados</h4>

                <SelectedCoffees>

                    {coffeesInCart.map((coffee)=>(
                        <Coffee key={coffee.id}>
                            <div>
                                <img src={coffee.image}/>
                                <div>
                                    <CoffeeTitle>{coffee.title}</CoffeeTitle>
                                    <CoffeeButons>
                                        <ButtonQuantity quantity={coffee.quantity} incrementQuantity={()=> handleIncrementItem(coffee.id)} decrementQuantity={()=> handleDecrementItem(coffee.id)}/>
                                        <button onClick={()=> handleRemoveItem(coffee.id)}>
                                            <Trash size={16}/>
                                            <p>REMOVER</p>
                                        </button>
                                    </CoffeeButons>
                                </div>
                            </div>
                            <span>R$ {coffee.price.toFixed(2)}</span>
                        </Coffee>

                    ))}
                
                    <TotalContainer>
                        <div>
                            <p>Total de itens</p>
                            <p>
                                {new Intl.NumberFormat('pt-br', {
                                currency: 'BRL',
                                style: 'currency',
                                }).format(totalItemsPrice)}
                            </p>
                        </div>
                        <div>
                            <p>Entrega</p>
                            <p>
                                {new Intl.NumberFormat('pt-br', {
                                currency: 'BRL',
                                style: 'currency',
                                }).format(shippingPrice)}
                            </p>
                        </div>
                        <div>
                            <span>Total</span>
                            <span>
                                {new Intl.NumberFormat('pt-br', {
                                currency: 'BRL',
                                style: 'currency',
                                }).format(totalItemsPrice + shippingPrice)}
                            </span>
                        </div>
                    </TotalContainer>
                    <ConfirmButton type="submit" form="order">
                        CONFIRMAR PEDIDO
                    </ConfirmButton>
                </SelectedCoffees>

            </SelectedCoffeesContainer>
        </CartContainer>
    )
}