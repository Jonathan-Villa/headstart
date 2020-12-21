import { combineReducers } from "redux";
import { loginReducer, registerReducer, alertReducer,quickLogReducer, getUserReducer } from "../../reducers";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";

const rootReducer = combineReducers({

  loginReducer,
  registerReducer,
  alertReducer,
  quickLogReducer,
  getUserReducer,
});

const reducer = persistReducer(
  {
    key: "root",
    storage,
    blacklist:['alertReducer', 'registerReducer'],

    transforms: [
      encryptTransform({
        secretKey: "head-start-secretKey",
        onError:  (error) => {
          console.log(error);
        },
      }),
    ],
  },

  rootReducer
);

export default reducer
