import { ReactNode } from "react";
import { ButtonContainer } from "./styles";

interface Props {
    children: ReactNode
}

export function ButtonFormPayment({children}: Props) {
    return (
        <ButtonContainer>
            {children}
        </ButtonContainer>
    )
}