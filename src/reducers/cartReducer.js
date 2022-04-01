function cartReducer(state, { type, payload }) {
    switch (type) {
        case "ADD_TO_CART":
            return {...state, items_count: state.items_count + 1, itemsInCart: [...state.itemsInCart, payload], total_price: state.total_price + payload.price };
        case "REMOVE_FROM_CART":
            return {...state, items_count: state.items_count - 1, itemsInCart: state.itemsInCart.filter(product => product._id !== payload._id), total_price: state.total_price - payload.price };
        case "CLEAR_CART":
            return {...state, items_count: 0, total_price: 0, itemsInCart: [] }
        default:
            return state;
    }
}

export { cartReducer };