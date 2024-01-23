import {
  MD3LightTheme as lightMD3Theme,
  MD3DarkTheme as darkMD3Theme,
} from "react-native-paper";

export const lightTheme = {
  ...lightMD3Theme,
  colors: {
    ...lightMD3Theme.colors,
    primary: "#03176f",
    secondary: "#3F7AE5",
    white: "#ffffff",
  },
};

export const darkTheme = {
  ...darkMD3Theme,
  colors: {
    ...darkMD3Theme.colors,
    primary: "#03176f",
    secondary: "#3F7AE5",
  },
};
