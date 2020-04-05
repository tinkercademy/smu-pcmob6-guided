import { AsyncStorage } from "react-native";
import createDataContext from "./createDataContext";
import { navigate } from "../navigationRef";
import axios from "axios";

const authReducer = (state, action) => {
  // insert code here
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
