import axios from "axios";
import { BaseApiUrl } from "../constants/apiRoutes";
import {
  USER_DATA,SET_MESSAGE,GET_PAGE_DATA
} from "../reducers/types";
import { isEmpty } from "../helpers/validator";
import {authHeader} from '../helpers'

export const Authentication = (username, password) => dispatch => {
  let authinfo={
    Username:username,
    Password:password
}
  axios.post(BaseApiUrl + "Users/Login",authinfo).then(
    resp => {
      if (resp.data.Success === true) {
        localStorage.setItem('user', JSON.stringify(resp.data.Result));
        dispatch({
          type: USER_DATA,
          payload: resp.data.Result
        });
        window.location.href='/';
      } else {
        dispatch({
          type: SET_MESSAGE,
          payload: isEmpty(resp.data.Message)
            ? "Failed to load Learner."
            : resp.data.Message
        });
      }
    },
    err => {
      dispatch({
        type: SET_MESSAGE,
        payload: "Failed to connect to the server.."
      });
    }
  );
};

export const GetPageList = () => dispatch => {
  let param= {CurrentPage:1,PageSize:10,StatusID:0,SearchText:""}
  axios.post(BaseApiUrl + "Page/GetPageList",param).then(
    resp => {
      if (resp.data.Success === true) {
        dispatch({
          type: GET_PAGE_DATA,
          payload: resp.data.Result
        });
      } else {
        dispatch({
          type: SET_MESSAGE,
          payload: isEmpty(resp.data.Message)
            ? "Failed to load Learner."
            : resp.data.Message
        });
      }
    },
    err => {
      dispatch({
        type: SET_MESSAGE,
        payload: "Failed to connect to the server.."
      });
    }
  );
};