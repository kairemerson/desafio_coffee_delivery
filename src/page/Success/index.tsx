import { InfoContent, InfoOrder, InfoSuccess, SuccessContainer } from "./styles";
import delivery from "../../assets/delivery.svg"
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useTheme } from "styled-components";

export function Success() {

    const theme = useTheme()
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
                            <span>Entrega em <strong>Rua João Daniel Martinelli, 102</strong></span>
                            <span>Farrapos - Porto Alegre, RS</span>
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
                            <strong>Cartão de Crédito</strong>
                        </div>
                    </div>
                    
                </InfoContent>
            </InfoOrder>
            </InfoSuccess>
            <img src={delivery}  />
        </SuccessContainer>
    )
}