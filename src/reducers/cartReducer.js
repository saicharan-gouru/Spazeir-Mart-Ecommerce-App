import { triggerToast } from "../services";

function cartReducer(state, { type, payload }) {
    switch (type) {
        case "ADD_TO_CART":
            triggerToast("success", "Item added to cart")
            return {...state, items_count: state.items_count + 1, itemsInCart: [...state.itemsInCart, {...payload, quantity: 1 }], total_price: state.total_price + payload.price };
        case "REMOVE_FROM_CART":
            triggerToast("warning", "item removed from cart")
            return {...state, items_count: state.items_count - 1, itemsInCart: state.itemsInCart.filter(product => product._id !== payload._id), total_price: state.total_price - payload.price * payload.quantity };
        case "CLEAR_CART":
            triggerToast("error", "Cart cleared")
            return {...state, items_count: 0, total_price: 0, itemsInCart: [] }
        case "INCREASE_PRODUCT_QUANTITY":
            return {...state, total_price: state.total_price + payload.item.price, itemsInCart: state.itemsInCart.map(item => item._id === payload.item._id ? {...item, quantity: item.quantity + 1 } : item) }
        case "DECREASE_PRODUCT_QUANTITY":
            return {...state, total_price: state.total_price - payload.item.price, itemsInCart: state.itemsInCart.map(item => item._id === payload.item._id ? {...item, quantity: item.quantity - 1 } : item) }
        case "PLACE_ORDER":
            triggerToast("success", "Order placed")
            return {...state, items_count: 0, total_price: 0, itemsInCart: [] }
        default:
            return state;
    }
}

export { cartReducer };