import { Minus, Plus } from "phosphor-react";
import { Quantity } from "./styles";


interface Props {
    quantity: number
    incrementQuantity: () => void
    decrementQuantity: () => void
}

export function ButtonQuantity({quantity, incrementQuantity, decrementQuantity}: Props) {
    return(
        <Quantity>
            <Minus size={14} weight="bold" onClick={decrementQuantity}/> <p>{quantity}</p> <Plus size={14}weight="bold" onClick={incrementQuantity}/>
        </Quantity>
    )
}