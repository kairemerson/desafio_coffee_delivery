import { ReactNode } from "react";
import { ButtonContainer } from "./styles";

interface Props {
    children: ReactNode
}

export function ButtonFormPayment({children, ...rest}: Props) {
    return (
        <ButtonContainer {...rest}>
            {children}
        </ButtonContainer>
    )
}