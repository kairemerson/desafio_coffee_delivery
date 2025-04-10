import { CartContainer, HeaderContainer } from "./styles";
import logo from "../../assets/Logo.svg"
import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
    return(
        <HeaderContainer>
            <img src={logo} />
            <nav>
                <NavLink to="#"><MapPin size={22}  fill="#8047F8" weight="fill"/> <span>Porto Alegre, RS</span></NavLink>
                <NavLink to="/checkout" title="checkout"><CartContainer><ShoppingCart size={22} fill="#DBAC2C" weight="fill"/></CartContainer></NavLink>
            </nav>
        </HeaderContainer>
    )
}