import { CartContainer, HeaderContainer, NumberItemsInCart } from "./styles";
import logo from "../../assets/Logo.svg"
import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartProvider";

export function Header() {

    const {cart} = useContext(CartContext)

    return(
        <HeaderContainer>
            <NavLink to={"/"}>
                <img src={logo} />
            </NavLink>
            <nav>
                <NavLink to="#"><MapPin size={22}  fill="#8047F8" weight="fill"/> <span>Porto Alegre, RS</span></NavLink>
                <NavLink to="/cart" title="checkout">
                    <CartContainer><ShoppingCart size={22} fill="#C47F17" weight="fill"/></CartContainer>
                    {cart.length > 0 && <NumberItemsInCart>{cart.length}</NumberItemsInCart>}
                    
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}