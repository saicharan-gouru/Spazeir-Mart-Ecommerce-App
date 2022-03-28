function cartReducer(state, { type, payload }) {
    switch (type) {
        case "ADD_TO_CART":
            return {...state, items_count: state.items_count + 1 };
        default:
            return state;
    }
}

export { cartReducer };