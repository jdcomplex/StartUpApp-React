import axios from "axios";
import { BaseApiUrl } from "../constants/apiRoutes";
import { SET_CURRENT_USER, SET_MESSAGE, LOGOUT } from "../reducers/types";
import { isEmpty } from "../helpers/validator";

export const Authentication = (username, password) => (dispatch) => {
  let authinfo = {
    Username: username,
    Password: password
  };
  axios.post(BaseApiUrl + "Users/Login", authinfo).then(
    (resp) => {
      if (resp.data.Success === true) {
        localStorage.removeItem("user");
        localStorage.setItem("user", JSON.stringify(resp.data.Result));
        dispatch({
          type: SET_CURRENT_USER,
          payload: resp.data.Result
        });
        window.location.href = "/";
      } else {
        dispatch({
          type: SET_MESSAGE,
          payload: resp.data.Message
        });
      }
    },
    (err) => {
      dispatch({
        type: SET_MESSAGE,
        payload: "Failed to connect to the server.."
      });
    }
  );
};

export const LogOut = () => (dispatch) => {
  localStorage.removeItem("user");
  dispatch({
    type: LOGOUT
  });
};
