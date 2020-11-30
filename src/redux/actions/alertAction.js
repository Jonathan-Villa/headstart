import { alertType } from "./actiontypes/alertTypes";

export const alertSuccess = (message) => {
  return { type: alertType.SUCCESS, message };
};

export const alertError = (message, email) => {
  return { type: alertType.ERROR, message, email};
};
