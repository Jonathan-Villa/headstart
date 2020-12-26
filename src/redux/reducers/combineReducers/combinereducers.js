import { combineReducers } from "redux";
import {
  loginReducer,
  registerReducer,
  alertReducer,
  quickLogReducer,
  timeSheetReducer,
  userReducer,
  adminTimeSheetReducer,
} from "../../reducers";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";

const rootReducer = combineReducers({
  loginReducer,
  registerReducer,
  timeSheetReducer,
  userReducer,
  alertReducer,
  quickLogReducer,
  adminTimeSheetReducer,
});

const reducer = persistReducer(
  {
    key: "root",
    storage,
    blacklist: [
      "alertReducer",
      "registerReducer",
      "quickLogReducer",
      "loginReducer",
    ],

    transforms: [
      encryptTransform({
        secretKey: "head-start-secretKey",
        onError: (error) => {
          console.log(error);
        },
      }),
    ],
  },

  rootReducer
);

export default reducer;
