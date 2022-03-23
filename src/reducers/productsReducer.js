function productsReducer(state, { type, payload }) {
    switch (type) {
        case "SORT_BY_PRICE":
            return {...state, sortByPrice: payload }
        case "FETCH_PRODUCTS":
            return {...state, products: payload }
        case "FETCH_CATEGORIES":
            return {...state, categories: payload }
        case "INCLUDE_STAPLES":
            return {...state, includeStaples: !state.includeStaples }

        default:
            return state
    }
}

export { productsReducer };