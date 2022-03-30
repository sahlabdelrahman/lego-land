import {
  ADD_TO_WISH_LIST,
  REMOVE_FROM_WISH_LIST,
} from "../constants/wishList.constant";

export const addToWishList = (id) => {
  return {
    type: ADD_TO_WISH_LIST,
    id,
  };
};

export const removeFromWishList = (id) => {
  return {
    type: REMOVE_FROM_WISH_LIST,
    id,
  };
};
