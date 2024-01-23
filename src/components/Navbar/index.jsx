import { Link } from "react-router-native";
import { StyleSheet, View, Text } from "react-native";
import { IconButton } from "react-native-paper";
import { useTheme } from "react-native-paper";
import { useLocation, useNavigate } from "react-router-native";
import { NavbarProps } from "./navbarProps";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const pathname = location.pathname;

  const styles = StyleSheet.create({
    nav: {
      width: "100%",
      height: "10%",
      flexDirection: "row",
      alignItems: "flex-start",
    },
    commonItemStyles: {
      flexDirection: "column",
      borderTopWidth: 1,
      borderTopColor: theme.colors.backdrop,
      alignItems: "center",
      flex: 1,
    },
    selectedRoute: {
      borderTopColor: theme.colors.primary,
      borderTopWidth: 4,
      marginTop: -2,
      color: theme.colors.primary,
    },
    opacityNormal: {
      opacity: 1,
      color: theme.colors.primary,
      fontWeight: "bold",
    },
    commonItemText: {
      marginTop: -15,
      fontSize: 12,
      opacity: 0.7,
    },
    iconStyles: {
      marginTop: -5,
      opacity: 0.7,
    },
  });
  console.log({ location });
  const handleNavbarPress = (routeTO) => {
    console.log(routeTO);
    navigate(routeTO);
  };
  return (
    <View style={styles.nav}>
      {NavbarProps.map(({ title, path, icontitle }, index) => {
        const isSelected = pathname === path;
        return (
          <View
            key={icontitle + index}
            style={[
              styles.commonItemStyles,
              isSelected ? styles.selectedRoute : {},
            ]}
            onTouchStart={() => handleNavbarPress(path)}
          >
            <IconButton
              icon={icontitle}
              size={24}
              style={[
                styles.iconStyles,
                isSelected ? styles.opacityNormal : {},
              ]}
              iconColor={
                isSelected ? theme.colors.primary : theme.colors.default
              }
            />
            <Text
              style={[
                styles.commonItemText,
                isSelected ? styles.opacityNormal : {},
              ]}
            >
              {title}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default Navbar;
