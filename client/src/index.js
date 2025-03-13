import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { dividerClasses } from "@mui/material";
// import { DarkModeContextProvider } from "./context/darkModeReducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <DarkModeContextProvider> */}
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
      {/* </DarkModeContextProvider> */}
    </Provider>
  </React.StrictMode>
);



