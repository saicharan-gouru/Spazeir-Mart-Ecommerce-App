import { triggerToast } from "../services";

function wishlistReducer(state, { type, payload }) {
    switch (type) {
        case "MOVE_TO_WISHLIST":
            triggerToast("success", "Item added to wishlist")
            return {...state, itemsInWishlist: [...state.itemsInWishlist, payload], wishlist_items_count: state.wishlist_items_count + 1 }
        case "REMOVE_FROM_WISHLIST":
            triggerToast("warning", "item removed from wishlist")
            return {...state, itemsInWishlist: state.itemsInWishlist.filter(item => item._id !== payload._id), wishlist_items_count: state.wishlist_items_count - 1 }
        case "CLEAR_WISHLIST":
            triggerToast("error", "Wishlist cleared")
            return {...state, itemsInWishlist: [], wishlist_items_count: 0 }
        default:
            return state;
    }
}

export { wishlistReducer };