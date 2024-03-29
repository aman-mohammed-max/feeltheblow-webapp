import { createStore, combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import { themeReducer } from "./reducer/theme";
import { runback } from "./reducer/runback";
import { firstuser } from "./reducer/firstuser";
import storage from "redux-persist-indexeddb-storage";

const rootReducer = {
  theme: themeReducer,
  runbg: runback,
  firstur: firstuser,
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
