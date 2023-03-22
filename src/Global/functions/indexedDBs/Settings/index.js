import { createStore, combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
// import { loggedReducer } from "./LoggedReducer";
import storage from "redux-persist-indexeddb-storage";

const rootReducer = {
  //  logged: loggedReducer,
};

const config = {
  key: "root",
  storage: storage("settings"),
};

const allReducers = combineReducers(rootReducer);
const persistedReducer = persistReducer(config, allReducers);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
