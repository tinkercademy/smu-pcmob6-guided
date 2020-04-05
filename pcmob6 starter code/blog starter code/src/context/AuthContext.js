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
    // insert code here
  } catch (err) {
    // insert code here
  }
};

const signin = dispatch => async ({ username, password }) => {
  try {
    // insert code here
  } catch (err) {
    // insert code here
  }
};

const signout = dispatch => async () => {
  // insert code here
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMessage },
  { token: null, errorMessage: "" }
);
