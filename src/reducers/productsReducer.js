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
        case "INCLUDE_SNACKS":
            return {...state, includeSnacks: !state.includeSnacks }
        case "INCLUDE_DAIRY_AND_EGGS":
            return {...state, includeDairyandEggs: !state.includeDairyandEggs }
        case "INCLUDE_VEGETABLES":
            return {...state, includeVegetables: !state.includeVegetables }
        case "CLEAR":
            return {...state, sortByPrice: null, includeStaples: false, includeSnacks: false, includeDairyandEggs: false, includeVegetables: false }
        default:
            return state
    }
}

export { productsReducer };