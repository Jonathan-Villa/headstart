import { combineReducers } from "redux";
import { loginReducer, registerReducer, alertReducer } from "../../reducers";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";

const rootReducer = combineReducers({
  loginReducer,
  registerReducer,
  alertReducer,
});

const reducer = persistReducer(
  {
    key: "root",
    storage,
    whitelist: ["loginReducer"],
    transforms: [
      encryptTransform({
        secretKey: "head-start-secretKey",
        onError: function (error) {
          console.log(error);
        },
      }),
    ],
  },
  rootReducer
);

export default reducer;
