import {
  configureStore,
  Action,
  ThunkAction,
  getDefaultMiddleware,
  combineReducers,
} from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { registerReducer } from "./authentication/reducers.auth";
import { userReducer } from "./users/reducer.users";
import { categoryReducer } from "./category/reducer.category";
import sidebarReducer from "./general/reducer.general";
import cartReducer from "./cart/reducer.cart";
import orderReducer from "./order/reducer.order";

// We make configs of reducers
const rootPersistConfig = {
  key: "root",
  storage: storage,
};

// Configs for persisting cart state
const cartPersistConfig = {
  key: "cart",
  storage: storage,
  blacklist: ["payementMethod", "coupon"],
};

// We combine our reducers
const rootReducer = combineReducers({
  registerState: registerReducer,
  userState: userReducer,
  category: categoryReducer,
  sidebar: sidebarReducer,
  orderCreated: orderReducer,
  cart: persistReducer(cartPersistConfig, cartReducer),
});

// We configure our store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// We persist the store.
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
