import React from "react";
import Routes from "./src/routes";
import { AppRegistry, useColorScheme } from "react-native";
import { PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import Store from "./src/store";
import { lightTheme, darkTheme } from "./src/theme";

const App = () => {
  const colorSchema = useColorScheme();
  const theme = colorSchema === "dark" ? darkTheme : lightTheme;
  return (
    <Provider store={Store}>
      <PaperProvider theme={theme}>
        <Routes />
      </PaperProvider>
    </Provider>
  );
};

AppRegistry.registerComponent("App", () => App);

export default App;
