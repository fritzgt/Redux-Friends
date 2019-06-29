import axios from "axios";

export const LOGGING_IN = "LOGGING_IN";
export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

//custom middleware
export const login = creds => dispatch => {
  dispatch({ type: LOGGING_IN });
  return (
    axios
      .post("http://localhost:5000/api/login", creds)
      //setting the  token to local storage
      .then(res => localStorage.setItem("token", res.data.payload))
  );
};

//getFriend from api
export const getFriends = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  axios
    .get("http://localhost:5000/api/friends", {
      headers: { authorization: localStorage.getItem("token") }
    })
    .then(res => {
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      //check if unsuccessful error
      if (err.localStorage.status === 403) {
        localStorage.removeItem("token");
      }
      dispatch({ type: FETCH_DATA_FAILURE, payload: err.response });
    });
};
