import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/combineReducers/combinereducers";
import {persistStore} from "redux-persist"


 const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk))
);

 const persistor = persistStore(store)

export {store, persistor};
