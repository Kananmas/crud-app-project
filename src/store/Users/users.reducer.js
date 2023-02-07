//Constants
import * as types from "./users.constants";

export const initialState = {
  users: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USERS:
      return {
        ...initialState,
        users: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
