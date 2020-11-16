import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import registerReducer from "./registerReducer";
import alertsReducer from "./alertsReducer"

const rootReducer = combineReducers({ 
  loginReducer,
  registerReducer,
  alertsReducer
});

export default rootReducer;
