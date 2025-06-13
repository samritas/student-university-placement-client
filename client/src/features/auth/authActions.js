import axios from "axios";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "./authTypes";

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

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const login = (username, password) => async (dispatch) => {
  dispatch(loginRequest());

  try {
    const response = await axios.post(`${BASE_URL}/admin/login`, {
      username,
      password,
    });

    const token = response.headers["x-auth-token"];
    localStorage.setItem("token", token);

    dispatch(loginSuccess(token));
  } catch (error) {
    dispatch(loginFailure(error?.response?.data?.message || error.message));
  }
};
