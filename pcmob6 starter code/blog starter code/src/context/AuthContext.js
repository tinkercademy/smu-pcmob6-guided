import { AsyncStorage } from "react-native";
import createDataContext from "./createDataContext";
import { navigate } from "../navigationRef";
import axios from "axios";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signin":
      console.log("signin");
      const res = JSON.parse(action.payload.request._response);
      console.log(res.access_token);
      axios.defaults.headers.common[
        "Authorization"
      ] = `JWT ${res.access_token}`;
      return { ...state, errorMessage: "", token: res.access_token };
    case "clear_error_message":
      return { ...state, errorMessage: "" };
    case "signout":
      return { ...state, token: null, errorMessage: "" };
    default:
      return state;
  }
};

const clearErrorMessage = dispatch => () => {
  dispatch({ type: "clear_error_message" });
};

const signup = dispatch => async ({ username, password }) => {
  try {
    const response = await axios.post(
      "https://pcmob4-blog-api.herokuapp.com/newuser",
      { username, password }
    );
    navigate("Index");
  } catch (err) {
    dispatch({ type: "add_error", payload: `${err}` });
  }
};

const signin = dispatch => async ({ username, password }) => {
  try {
    const response = await axios.post(
      "https://pcmob4-blog-api.herokuapp.com/auth",
      { username, password }
    );
    dispatch({
      type: "signin",
      payload: response
    });
    navigate("Index");
  } catch (err) {
    dispatch({
      type: "add_error",
      payload: `{$err}`
    });
  }
};

const signout = dispatch => async () => {
  await AsyncStorage.removeItem("token");
  dispatch({ type: "signout" });
  navigate("loginFlow");
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMessage },
  { token: null, errorMessage: "" }
);
