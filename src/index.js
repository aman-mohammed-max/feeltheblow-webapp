import React, { createContext, useState, useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./Global/Fonts/Fonts.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import Main from "./Screen/Main/Main";
import Settings from "./Screen/Settings/Settings";
// import { Provider } from "react-redux";
// import { store, persistor } from "./Global/functions/indexedDBs/Settings";
// import { PersistGate } from "redux-persist/lib/integration/react";

export const settingsopen = createContext(null);
export const audioplay = createContext(null);

function App() {
  const [open, setOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  let fab = useRef(null);

  return (
    // <Provider store={store}>
    //   <PersistGate loading={<div>Loading......</div>} persistor={persistor}>
    <settingsopen.Provider value={{ open, setOpen }}>
      <audioplay.Provider value={{ fab, isPlaying, setIsPlaying }}>
        <Main />
      </audioplay.Provider>
      <Settings />
    </settingsopen.Provider>
    //   </PersistGate>
    // </Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
