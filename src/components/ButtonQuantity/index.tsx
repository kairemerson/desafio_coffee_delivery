import { Minus, Plus } from "phosphor-react";
import { Quantity } from "./styles";


export function ButtonQuantity() {
    return(
        <Quantity>
            <Minus size={14} weight="bold" /> <p>1</p> <Plus size={14}weight="bold" />
        </Quantity>
    )
}