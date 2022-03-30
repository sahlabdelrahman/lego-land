import { createStore, combineReducers } from "redux";

import productsReducer from "./reducers/products.reducer";
import wishListReducer from "./reducers/wishList.reducer";
import cartReducer from "./reducers/cart.reducer";

const reducers = combineReducers({
  products: productsReducer,
  wishListItems: wishListReducer,
  cart: cartReducer,
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
