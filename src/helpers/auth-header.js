import axios from "axios";

export function authHeader() {
  // return authorization header with jwt token
  let user = JSON.parse(localStorage.getItem("user"));

  if (user && user.SessionToken) {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${user.SessionToken}`;
  } else {
    axios.defaults.headers.common["Authorization"] = "";
    delete axios.defaults.headers.common["Authorization"];
  }
}
