import { combineReducers } from "redux";
import { authenticationReducer } from "./authenticatinReducer";



 const rootReducer= combineReducers({
    authenticationReducer: authenticationReducer,
  
});

export default rootReducer
