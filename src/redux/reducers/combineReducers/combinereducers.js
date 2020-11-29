import { combineReducers } from "redux";
import {loginReducer,registerReducer,alertReducer} from "../../reducers"

const rootReducer = combineReducers({ 
  loginReducer,
  registerReducer,
  alertReducer
});

export default rootReducer;
