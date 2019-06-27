import axios from " axios";

export const LOGGING_IN = "LOGGING_IN";

export const login = creds => dispatch => {
  dispatch({ type: LOGGING_IN });
  return axios
    .post("http://localhost:5000/", creds)
    .then(res => localStorage.setItem("token", res.data.payload));
};
