import { Text, View } from "react-native";
import { useTheme } from "react-native-paper";
const Home = () => {
  const theme = useTheme();
  return <Text style={{ color: theme.colors.primary }}>Home</Text>;
};

export default Home;
