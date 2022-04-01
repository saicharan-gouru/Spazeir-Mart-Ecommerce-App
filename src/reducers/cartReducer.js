function cartReducer(state, { type, payload }) {
    switch (type) {
        case "ADD_TO_CART":
            return {...state, items_count: state.items_count + 1, itemsInCart: [...state.itemsInCart, {...payload, quantity: 1 }], total_price: state.total_price + payload.price };
        case "REMOVE_FROM_CART":
            return {...state, items_count: state.items_count - 1, itemsInCart: state.itemsInCart.filter(product => product._id !== payload._id), total_price: state.total_price - payload.price };
        case "CLEAR_CART":
            return {...state, items_count: 0, total_price: 0, itemsInCart: [] }
        case "INCREASE_PRODUCT_QUANTITY":
            return {...state, total_price: state.total_price + payload.item.price, itemsInCart: state.itemsInCart.map(item => item._id === payload.item._id ? {...item, quantity: item.quantity + 1 } : item) }
        case "DECREASE_PRODUCT_QUANTITY":
            return {...state, total_price: state.total_price - payload.item.price, itemsInCart: state.itemsInCart.map(item => item._id === payload.item._id ? {...item, quantity: item.quantity - 1 } : item) }

        default:
            return state;
    }
}

export { cartReducer };