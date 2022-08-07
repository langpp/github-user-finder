import { GET_USERNAME, SAMPLE_ERROR } from "../types";

const initialState = {
  sample: [],
  loading: true,
};

const usernameReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERNAME:
      return {
        ...state,
        sample: action.payload,
        loading: false,
      };

    case SAMPLE_ERROR:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default usernameReducer;