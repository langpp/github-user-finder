import { GET_USERNAME } from "../types";

export const getUsernameData = () => async (dispatch) => {
    dispatch({
    type: GET_USERNAME,
    payload: "",
    });
};