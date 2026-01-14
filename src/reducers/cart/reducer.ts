import { newOrderData } from "../../page/Cart"
import { ActionTypes } from "./actions"
import {produce} from "immer"

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

interface AddItemAction {
  type: ActionTypes.ADD_ITEM
  payload: {
    item: Item
  }
}

interface RemoveItemAction {
  type: ActionTypes.REMOVE_ITEM
  payload: {
    itemId: string
  }
}

interface IncrementItemQuantityAction {
  type: ActionTypes.INCREMENT_ITEM_QUANTITY
  payload: {
    itemId: string
  }
}

interface DecrementItemQuantityAction {
  type: ActionTypes.DECREMENT_ITEM_QUANTITY
  payload: {
    itemId: string
  }
}

interface CheckoutCartAction {
  type: ActionTypes.CHECKOUT_CART
  payload: {
    order: newOrderData
    callback: (path: string) => void
  }
}

export type CartActions =
  | AddItemAction
  | RemoveItemAction
  | IncrementItemQuantityAction
  | DecrementItemQuantityAction
  | CheckoutCartAction

export function cartReducer(state: CartState, action: CartActions) {
    switch(action.type) {
        case ActionTypes.ADD_ITEM:
            return produce(state, (draft)=>{
                const itemAlready = draft.cart.find((item)=> item.id === action.payload.item.id)

                if(itemAlready) {
                    itemAlready.quantity += action.payload.item.quantity
                }else{
                    draft.cart.push(action.payload.item)
                }
            })
        
        case ActionTypes.REMOVE_ITEM:
            return produce(state, (draft)=> {
                const indexItemToRemove = draft.cart.findIndex((item)=> item.id === action.payload.itemId)

                draft.cart.splice(indexItemToRemove, 1)
            })

        case ActionTypes.INCREMENT_ITEM_QUANTITY:
            return produce(state, (draft)=> {
                const itemToIncrement = draft.cart.find((item)=> item.id === action.payload.itemId)

                if(itemToIncrement?.id) {
                    itemToIncrement.quantity += 1
                }
            })

        case ActionTypes.DECREMENT_ITEM_QUANTITY:
            return produce(state, (draft)=> {
                const itemToDecrement = draft.cart.find((item)=> item.id === action.payload.itemId)

                if(itemToDecrement?.id && itemToDecrement.quantity > 1) {
                    itemToDecrement.quantity -= 1
                }
            })

        case ActionTypes.CHECKOUT_CART:
            return produce(state, (draft)=> {
                const newOrder = {
                    id: new Date().getTime(),
                    items: state.cart,
                    ...action.payload.order,
                }
                draft.orders.push(newOrder)
                draft.cart = []
                action.payload.callback(`/order/${newOrder.id}/success`)
            })
        
        default:
            return state
    }
}