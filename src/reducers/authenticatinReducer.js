import { SET_CURRENT_USER, GET_PAGE_DATA, LOGOUT, SET_MESSAGE } from "./types";
import { isEmpty } from "../helpers/validator";

let user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  errorMessage: null
};

export function authenticationReducer(state = initialState, action) {
  switch (action.type) {
    case SET_MESSAGE:
      return {
        ...state,
        errorMessage: action.payload
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload
      };
    case LOGOUT:
      return {};
    case GET_PAGE_DATA:
      return {
        ...state,
        pageData: action.payload
      };
    default:
      return state;
  }
}
