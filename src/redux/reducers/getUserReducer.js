import { userActionType } from "../actions/actiontypes";

 const getUserReducer = (state = {}, action) => {
  switch (action.type) {
    case userActionType.GET_USER_SUCCESS:
      return {
        ...state,
        user: action.user,
      };
    case userActionType.GET_USER_FAIL:
      return {
        ...state,
        payload: {},
      };

    default:
      return {};
  }
};

export { getUserReducer}