import {
  LOGGING_IN,
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE
} from "../actions";

const initialState = {
  deletingFriend: false,
  fetchingFriends: false,
  friends: [],
  loggingIn: false,
  savingFriends: false,
  updatingFriend: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGING_IN: {
      return {
        ...state,
        loggingIn: true
      };
    }
    case FETCH_DATA_START: {
      return {
        ...state,
        error: "",
        fetchingFriends: true
      };
    }
    case FETCH_DATA_SUCCESS: {
      console.log("Data from reducer", action.payload);
      return {
        ...state,
        error: "",
        fetchingFriends: false,
        friends: action.payload
      };
    }
    case FETCH_DATA_FAILURE: {
      return {
        ...state,
        error: action.payload
      };
    }
    default:
      return state;
  }
};

export default reducer;
