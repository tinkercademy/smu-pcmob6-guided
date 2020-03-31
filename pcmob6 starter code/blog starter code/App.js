import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import IndexScreen from "./src/screens/IndexScreen";
import { Provider } from "./src/context/BlogContext";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";

import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { setNavigator } from "./src/navigationRef";

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  main: createBottomTabNavigator({
    Blog: createStackNavigator(
      {
        Index: IndexScreen,
        Show: ShowScreen,
        Create: CreateScreen,
        Edit: EditScreen
      },
      {
        initialRouteName: "Index",
        defaultNavigationOptions: {
          title: "Blog"
        }
      }
    ),
    Account: AccountScreen
  })
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <Provider>
        <App
          ref={navigator => {
            setNavigator(navigator);
          }}
        />
      </Provider>
    </AuthProvider>
  );
};
