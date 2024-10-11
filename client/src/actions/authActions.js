import axios from "axios";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  payload: token,
});

const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const login = (username, password) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await axios.post("http://localhost:3000/admin/login", {
      username,
      password,
    });
    const token = response.headers["x-auth-token"];
    console.log(response);
    dispatch(loginSuccess(token));
    // Optionally, you can save the token to localStorage or sessionStorage for persistence
    localStorage.setItem("token", response?.data?.token);
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};
