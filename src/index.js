import React from "react";
import ReactDOM from "react-dom";
import App from "./Routes/App";
import { Navbar } from "./components/NavBar";
import { store, persistor } from "./redux/store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
