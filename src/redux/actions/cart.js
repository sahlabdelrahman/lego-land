import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/cart.constant";

export const addToCart = (id, price) => {
  return {
    type: ADD_TO_CART,
    payload: {
      id,
      price,
    },
  };
};

export const removeFromCart = (id, price) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      id,
      price,
    },
  };
};
