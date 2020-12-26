import {userActionType} from "../Actiontypes"

export const adminTimeSheetFailure = ()=> {
    return{
        type: userActionType.ADMIN_TIMESHEET_FAILURE,
        adminTimeSheetFailure: true
    }
}


export const adminTimeSheetSuccess = (payload) => {
    return{
        type: userActionType.ADMIN_TIMESHEET_SUCCESS,
        payload: payload
    }
}

export const adminTimeSheetLoading = ()=> {
    return{
        type: userActionType.ADMIN_TIMESHEET_LOADING,
        adminTimeSheetIsLoading: true
    }
}