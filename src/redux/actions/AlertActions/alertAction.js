import { alertType } from "../Actiontypes/alertTypes";

export const alertSuccess = (message) => {
  return { type: alertType.SUCCESS, message };
};

export const alertError = (message) => {
  return { type: alertType.ERROR, message};
};
