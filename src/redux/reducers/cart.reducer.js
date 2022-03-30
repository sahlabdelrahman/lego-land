import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/cart.constant";

const CartReducer = (
  state = { items: [], total: 0, itemsCount: 0 },
  action
) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload.id],
        total: state.total + action.payload.price,
        itemsCount: state.itemsCount + 1,
      };
    case REMOVE_FROM_CART:
      const items = state.items.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        items: [...items],
        total: state.total - action.payload.price,
        itemsCount: state.itemsCount - 1,
      };

    default:
      return state;
  }
};

export default CartReducer;
