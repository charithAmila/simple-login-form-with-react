import { authenticate } from "../actions/auth";
import * as Api from "../utils/api/auth";
import { removeCookie } from "../utils/cookie";
import { ACCESS_TOCKEN } from "../utils/constants";

export const checkAuthenticated = () => dispatch => {
  Api.checkAuth()
    .then(() => {
      dispatch(authenticate(true));
    })
    .catch(error => {
      dispatch(authenticate(false));
    });
};

export const logout = () => dispatch => {
  Api.logout()
    .then(res => {
      removeCookie(ACCESS_TOCKEN);
      dispatch(authenticate(false));
    })
    .catch(error => {
      removeCookie(ACCESS_TOCKEN);
      dispatch(authenticate(false));
    });
};
