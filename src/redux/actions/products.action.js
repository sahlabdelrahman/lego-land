import {
  APPLY_FILTER,
  FILTER_BY_AGE,
  FILTER_BY_PRICE,
  FILTER_BY_THEME,
  FILTER_PRODUCTS,
  REMOVE_FILTER,
} from "../constants/products.constant";

export const filterProducts = (searchValue) => {
  return {
    type: FILTER_PRODUCTS,
    payload: {
      value: searchValue,
    },
  };
};

export const filterByTheme = (themes) => {
  return {
    type: FILTER_BY_THEME,
    payload: {
      themes,
    },
  };
};

export const filterByAge = (ages) => {
  return {
    type: FILTER_BY_AGE,
    payload: {
      ages,
    },
  };
};

export const filterByPrice = (price) => {
  return {
    type: FILTER_BY_PRICE,
    payload: {
      minPrice: price[0],
      maxPrice: price[1],
    },
  };
};

export const applyFilter = () => {
  return {
    type: APPLY_FILTER,
    payload: {
      age: "6 year - 10 years",
    },
  };
};

export const removeFilter = () => {
  return {
    type: REMOVE_FILTER,
  };
};
