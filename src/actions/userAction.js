import axios from "axios";
import { BaseApiUrl } from "../constants/apiRoutes";
import { SET_MESSAGE } from "../reducers/types";
import { isEmpty } from "../helpers/validator";

export const RegisterUser = (postData, callback) => (dispatch) => {
  axios.post(BaseApiUrl + "Users/RegisterUser", postData).then(
    (resp) => {
      callback && callback(resp.data);
    },
    (err) => {
      dispatch({
        type: SET_MESSAGE,
        payload: "Failed to connect to the server.."
      });
    }
  );
};
