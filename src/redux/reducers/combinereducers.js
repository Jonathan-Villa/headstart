import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import registerReducer from "./registerReducer";
import alertReducer from "./alertsReducer"

const rootReducer = combineReducers({ 
  loginReducer,
  registerReducer,
  alertReducer
});

export default rootReducer;
