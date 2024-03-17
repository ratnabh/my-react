import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/userSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import counterReducer from "./features/counterSlice";
// const persistConfig = {
//   key: "root",
//   storage,
// };
const persistConfig = {
  key: "root",
  storage: storage,
  blacklist: ["counter"], // navigation will not be persisted
  whitelist: ["auth"],
};
const reducer = combineReducers({
  // not persisting this reducer
  counter: counterReducer,
  auth: authReducer,
});
const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);
