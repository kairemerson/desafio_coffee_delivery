import { newOrderData } from "../../page/Cart"
import { ActionTypes } from "./actions"
import {produce} from "immer"
import {
  addItemAction,
  removeItemAction,
  incrementItemQuantityAction,
  decrementItemQuantityAction,
  checoutCartAction,
} from "./actions"
import { NavigateFunction } from "react-router-dom"

export type CartActions =
  | ReturnType<typeof addItemAction>
  | ReturnType<typeof removeItemAction>
  | ReturnType<typeof incrementItemQuantityAction>
  | ReturnType<typeof decrementItemQuantityAction>
  | ReturnType<typeof checoutCartAction>

export interface Item {
    id: string
    quantity: number
}

export interface Order extends newOrderData {
    id: number
    items: Item[]
}

interface CartState {
    cart: Item[]
    orders: Order[]
}



export function cartReducer(state: CartState, action: CartActions) {
    switch(action.type) {
        case ActionTypes.ADD_ITEM: {

            const { item } = action.payload as { item: Item }

            return produce(state, (draft)=>{
                const itemAlready = draft.cart.find((item)=> item.id === item.id)

                if(itemAlready) {
                    itemAlready.quantity += item.quantity
                }else{
                    draft.cart.push(item)
                }
            })
        }

        case ActionTypes.REMOVE_ITEM:{

            const { itemId } = action.payload as { itemId: string }

            return produce(state, (draft)=> {
                const indexItemToRemove = draft.cart.findIndex((item)=> item.id === itemId)

                draft.cart.splice(indexItemToRemove, 1)
            })
        }

        case ActionTypes.INCREMENT_ITEM_QUANTITY:{
            const { itemId } = action.payload as { itemId: string }

            return produce(state, (draft)=> {
                const itemToIncrement = draft.cart.find((item)=> item.id === itemId)

                if(itemToIncrement?.id) {
                    itemToIncrement.quantity += 1
                }
            })
        }

        case ActionTypes.DECREMENT_ITEM_QUANTITY:{

            const { itemId } = action.payload as { itemId: string }

            return produce(state, (draft)=> {
                const itemToDecrement = draft.cart.find((item)=> item.id === itemId)

                if(itemToDecrement?.id && itemToDecrement.quantity > 1) {
                    itemToDecrement.quantity -= 1
                }
            })
        }

        case ActionTypes.CHECKOUT_CART: {
            const { order, callback } = action.payload as {
                order: newOrderData
                callback: NavigateFunction
            }

            return produce(state, (draft) => {
                const newOrder = {
                id: new Date().getTime(),
                items: state.cart,
                ...order,
                }

                draft.orders.push(newOrder)
                draft.cart = []
                callback(`/order/${newOrder.id}/success`)
            })
        }

        
        default:
            return state
    }
}