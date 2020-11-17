import { alertType } from "./actiontypes/alertTypes";

export const alertSuccess = (message) => {
  return { type: alertType.SUCCESS, message };
};

export const alertError = (err) => {
  return { type: alertType.ERROR, err};
};
