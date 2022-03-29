function cartReducer(state, { type, payload }) {
    switch (type) {
        case "ADD_TO_CART":
            return {...state, items_count: state.items_count + 1, itemsInCart: [...state.itemsInCart, payload] };
        case "REMOVE_FROM_CART":
            return {...state, items_count: state.items_count - 1, itemsInCart: state.itemsInCart.filter(product => product._id !== payload._id) };
        default:
            return state;
    }
}

export { cartReducer };