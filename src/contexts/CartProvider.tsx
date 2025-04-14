import { createContext, ReactNode, useReducer } from "react"
import { cartReducer, Item, Order } from "../reducers/cart/reducer"

import {addItemAction, removeItemAction, incrementItemQuantityAction, decrementItemQuantityAction, checoutCartAction} from "../reducers/cart/actions"
import { newOrderData } from "../page/Cart"
import { useNavigate } from "react-router-dom"

interface Props {
    children: ReactNode
}

interface CartContextType {
    cart: Item[]
    orders: Order[]
    addItem: (item: Item) => void
    removeItem: (itemId: string) => void
    incrementItem: (itemId: string) => void
    decrementItem: (itemId: string) => void
    checkout: (order: newOrderData) => void

}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({children}: Props) {

    const [cartState , dispatch] = useReducer(
        cartReducer, 
        {
            cart: [],
            orders: []
        }
    )

    const {cart, orders} = cartState
    const navigate = useNavigate()


    function addItem(item: Item) {
        dispatch(addItemAction(item))
    }

    function removeItem(itemId: string) {
        dispatch(removeItemAction(itemId))
    }

    function incrementItem(itemId: string) {
        dispatch(incrementItemQuantityAction(itemId))
    }

    function decrementItem(itemId: string) {
        dispatch(decrementItemQuantityAction(itemId))
    }

    function checkout(order: newOrderData) {
        dispatch(checoutCartAction(order, navigate))
    }

    return (
        <CartContext.Provider  value={{ cart, orders, addItem, removeItem, incrementItem, decrementItem, checkout}}>
            {children}
        </CartContext.Provider>
    )
}