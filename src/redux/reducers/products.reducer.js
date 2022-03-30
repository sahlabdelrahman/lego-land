import products from "../../data/Products";

import {
  APPLY_FILTER,
  FILTER_BY_AGE,
  FILTER_BY_PRICE,
  FILTER_BY_THEME,
  FILTER_PRODUCTS,
  REMOVE_FILTER,
} from "../constants/products.constant";

const initialState = {
  items: [...products],
  filteredProducts: [],
  minPrice: 0,
  maxPrice: 0,
  themes: [],
  ages: [],
  searchValue: "",
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_PRODUCTS:
      const filteredProducts = state.items.filter((product) => {
        if (action.payload.value === "") {
          return product;
        } else {
          return product.name.toLowerCase().includes(action.payload.value);
        }
      });

      return { ...state, searchValue: action.payload.value, filteredProducts };

    case FILTER_BY_PRICE:
      return {
        ...state,
        minPrice: action.payload.minPrice,
        maxPrice: action.payload.maxPrice,
      };

    case FILTER_BY_THEME:
      return {
        ...state,
        themes: action.payload.themes,
      };

    case FILTER_BY_AGE:
      return {
        ...state,
        ages: action.payload.ages,
      };

    case APPLY_FILTER:
      let tempProducts = [...state.items];

      // if (state.searchValue === "") {
      //   tempProducts = [...state.items];
      // }

      // if (state.searchValue !== "") {
      //   tempProducts = [...state.filteredProducts];
      // }

      if (state.themes.length !== 0) {
        tempProducts = tempProducts.filter((product) =>
          product.theme.toLowerCase().includes(state.themes)
        );
      }

      if (state.ages.length !== 0) {
        tempProducts = tempProducts.filter((product) =>
          product.age.toLowerCase().includes(state.ages)
        );
      }

      if (state.maxPrice !== 0) {
        tempProducts = tempProducts.filter(
          (product) =>
            product.price >= state.minPrice && product.price <= state.maxPrice
        );
      }

      return { ...state, filteredProducts: tempProducts };
    case REMOVE_FILTER:
      return {
        ...state,
        filteredProducts: state.items,
        minPrice: 0,
        maxPrice: 0,
        themes: [],
        ages: [],
      };
    default:
      return state;
  }
};

export default productsReducer;
