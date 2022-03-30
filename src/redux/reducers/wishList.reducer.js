import {
  ADD_TO_WISH_LIST,
  REMOVE_FROM_WISH_LIST,
} from "../constants/wishList.constant";

const WishListReducer = (state = { items: [], itemsCount: 0 }, action) => {
  switch (action.type) {
    case ADD_TO_WISH_LIST:
      return {
        ...state,
        items: [...state.items, action.id],
        itemsCount: state.itemsCount + 1,
      };
    case REMOVE_FROM_WISH_LIST:
      const items = state.items.filter((item) => item.id !== action.id);

      return {
        ...state,
        items: items,
        itemsCount: state.itemsCount - 1,
      };

    default:
      return state;
  }
};
export default WishListReducer;
