import { userActionType } from "../actions/actiontypes";
 const quickLogReducer = (state = {}, action) => {
  switch (action.type) {
    case userActionType.QUICK_LOG_POST_FAIL:
      return {};
    case userActionType.QUICK_LOG_POST:
      return {
        ...state,
        payload: action.payload,
      };
    default:
      return {};
  }
};

export {quickLogReducer}