import { AUTHENTICATE, AUTH_USER } from "../../action-types";

export const authenticate = payload => {
  return { type: AUTHENTICATE, payload };
};

export const authUser = payload => {
  return { type: AUTH_USER, payload };
};
