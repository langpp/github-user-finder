import { combineReducers } from "redux";
import usernameReducer from "./usernameReducer";

export default combineReducers({
    usernameData: usernameReducer,
});