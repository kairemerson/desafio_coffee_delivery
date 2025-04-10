import { InputText } from "./styles";


export function Input({...rest}) {
    return (
        <InputText type="text" {...rest} />
    )
}