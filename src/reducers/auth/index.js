import { AUTHENTICATE, AUTH_USER } from "../../action-types";

const initialState = {
  authenticated: null,
  authUser: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AUTHENTICATE:
      return { ...state, authenticated: action.payload };
    case AUTH_USER:
      return { ...state, authUser: action.payload };
    default:
      return state;
  }
}
