function wishlistReducer(state, { type, payload }) {
    switch (type) {
        case "MOVE_TO_WISHLIST":
            return {...state, itemsInWishlist: [...state.itemsInWishlist, payload], wishlist_items_count: state.wishlist_items_count + 1 }
        case "REMOVE_FROM_WISHLIST":
            return {...state, itemsInWishlist: state.itemsInWishlist.filter(item => item._id !== payload._id), wishlist_items_count: state.wishlist_items_count - 1 }
        case "CLEAR_WISHLIST":
            return {...state, itemsInWishlist: [], wishlist_items_count: 0 }
        default:
            return state;
    }
}

export { wishlistReducer };