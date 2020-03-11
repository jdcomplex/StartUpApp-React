import { USER_DATA,GET_PAGE_DATA } from './types';
import { isEmpty } from '../helpers/validator';

let user = JSON.parse(localStorage.getItem('user'));

const initialState = {
    user:user?user:null,
    isLoggedIn:false,
    pageData:[]
}

export function authenticationReducer(state = initialState, action) {
  switch (action.type) {
    case USER_DATA:
      return {
        ...state,
        user: action.payload,
        isLoggedIn:!isEmpty(action.payload)
      };
      case GET_PAGE_DATA:
        return {
          ...state,
          pageData: action.payload
        };
    default:
      return state
  }
}