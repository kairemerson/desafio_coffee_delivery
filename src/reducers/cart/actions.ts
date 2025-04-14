import { NavigateFunction } from "react-router-dom"
import { newOrderData } from "../../page/Cart"
import { Item } from "./reducer"


export enum ActionTypes {
    ADD_ITEM = "ADD_ITEM",
    REMOVE_ITEM = "REMOVE_ITEM",
    INCREMENT_ITEM_QUANTITY = "INCREMENT_ITEM_QUANTITY",
    DECREMENT_ITEM_QUANTITY = "DECREMENT_ITEM_QUANTITY",
    CHECKOUT_CART = "CHECKOUT_CART",
}

export function addItemAction(item: Item) {
    return {
        type: ActionTypes.ADD_ITEM,
        payload: {
            item
        } 
    }
}

export function removeItemAction(itemId: string) {
    return {
        type: ActionTypes.REMOVE_ITEM,
        payload: {
            itemId
        }
    }
}

export function incrementItemQuantityAction(itemId: string) {
    return {
        type: ActionTypes.INCREMENT_ITEM_QUANTITY,
        payload: {
            itemId
        }
    }
}

export function decrementItemQuantityAction(itemId: string) {
    return {
        type: ActionTypes.DECREMENT_ITEM_QUANTITY,
        payload: {
            itemId
        }
    }
}

export function checoutCartAction(order: newOrderData, callback: NavigateFunction) {
    return {
        type: ActionTypes.CHECKOUT_CART,
        payload: {
            order,
            callback
        }
    }
}
    