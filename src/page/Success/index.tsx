import { InfoContent, InfoOrder, InfoSuccess, SuccessContainer } from "./styles";
import delivery from "../../assets/delivery.svg"
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useTheme } from "styled-components";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartProvider";
import { useParams } from "react-router-dom";

export function Success() {

    const theme = useTheme()
    const {orders} = useContext(CartContext)
    const {orderId} = useParams()

    const orderInfo = orders.find((order) => order.id === Number(orderId))
    const paymentMethod = {
        credit: 'Cartão de crédito',
        debit: 'Cartão de débito',
        cash: 'Dinheiro',
    }

    if (!orderInfo?.id) {
        return null
    }

    return (
        <SuccessContainer>
            <InfoSuccess>
                <h2>Uhu! Pedido confirmado</h2>
                <p>Agora é só aguardar que logo o café chegará até você</p>
            <InfoOrder>
                <InfoContent>
                    <div>
                        <MapPin size={32} weight="fill" style={{background: theme.purple}}/>
                        <div>
                            <span>Entrega em <strong>{orderInfo?.rua}, {orderInfo?.numero}</strong></span>
                            <span>{orderInfo?.bairro} - {orderInfo?.cidade}, {orderInfo?.uf}</span>
                        </div>
                    </div>
                    <div>
                        <Timer size={32} weight="fill" style={{background: theme.yellow}}/>
                        <div>
                            <span>Previsão de entrega</span>
                            <strong>20 min - 30 min</strong>
                        </div>
                    </div>
                    <div>
                        <CurrencyDollar size={32} weight="fill" style={{background: theme.yellowDark}}/>
                        <div>
                            <span>Pagamento na entrega</span>
                            <strong>{paymentMethod[orderInfo.paymentMethod]}</strong>
                        </div>
                    </div>
                    
                </InfoContent>
            </InfoOrder>
            </InfoSuccess>
            <img src={delivery}  />
        </SuccessContainer>
    )
}