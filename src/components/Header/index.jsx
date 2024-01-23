import React from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  ScrollView,
} from "react-native";
import { IconButton } from "react-native-paper";
import {
  useTheme,
  Searchbar,
  Modal,
  PaperProvider,
  Portal,
  Drawer,
} from "react-native-paper";
import Logo from "../../img/title.png";
const Header = () => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    headerContainer: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      margin: 0,
      padding: 0,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.backdrop,
    },
    imageStyles: {
      margin: 0,
      width: 70,
      height: 70,
      resizeMode: "contain",
      marginLeft: 5,
    },
    searchBarContainer: {
      width: "70%",
    },
    searchBarContainerSelected: {
      width: "82.5%",
      marginRight: 15,
    },
    searchBar: {
      height: 35,
      margin: 0,
      flexDirection: "row",
      alignItems: "center",
      borderRadius: 8,
      backgroundColor: theme.colors.white,
      borderColor: theme.colors.backdrop,
      borderWidth: 1,
      color: theme.colors.backdrop,
    },
    searchBarSelected: {
      color: theme.colors.primary,
      borderColor: theme.colors.primary,
      borderWidth: 2,
    },
    inputStyle: {
      height: 10,
      fontSize: 16,
      minHeight: 32,
      color: theme.colors.backdrop,
    },
    iconWrappers: {
      width: "10%",
    },
    message: {
      marginRight: 15,
    },
    modalStyles: {
      marginTop: 1,
      backgroundColor: "white",
      zIndex: 1,
      elevation: 1,
      height: 300,
    },
    modalContainerStyles: {
      backgroundColor: "white",
      zIndex: 1,
      elevation: 1,
      flex: 1,
    },
    modalViewContainer: {
      height: 300,
      overflow: "scroll",

      //   flex: 1,
    },
    drawerContainer: {
      width: 250,
    },
  });
  const modelAchorRef = React.useRef(null);
  const [openUserProfileDrawer, setUserProfilDrawer] = React.useState(false);
  const [searchBarDetails, setSearchBarValue] = React.useState({
    value: "",
    focused: false,
  });

  const handleSearchBar = (query) => {
    setSearchBarValue((prev) => ({ ...prev, value: query }));
  };
  const handleSearchBarBlur = () => {
    setSearchBarValue({ focused: false, value: "" });
  };
  const searchBarFocused = () => {
    setSearchBarValue((prev) => ({ ...prev, focused: true }));
  };
  const onPressOnBack = () => {
    if (searchBarDetails.focused) {
      handleSearchBarBlur();
    } else {
      setUserProfilDrawer(true);
    }
  };
  const handleCloseDrawer = () => {
    setUserProfilDrawer(false);
  };

  return (
    <React.Fragment>
      <View style={styles.headerContainer} ref={modelAchorRef}>
        <View style={styles.iconWrappers}>
          <IconButton
            icon={
              searchBarDetails.focused ? "arrow-left-thick" : "account-circle"
            }
            onPress={onPressOnBack}
            size={24}
          />
        </View>
        <View
          style={[
            styles.searchBarContainer,
            searchBarDetails.focused ? styles.searchBarContainerSelected : {},
          ]}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Searchbar
              style={[
                styles.searchBar,
                searchBarDetails.focused ? styles.searchBarSelected : {},
              ]}
              inputStyle={styles.inputStyle}
              iconColor={
                searchBarDetails.focused
                  ? theme.colors.primary
                  : theme.colors.backdrop
              }
              placeholder="Search"
              onChangeText={handleSearchBar}
              onBlur={handleSearchBarBlur}
              value={searchBarDetails.value}
              onFocus={searchBarFocused}
            />
          </TouchableWithoutFeedback>
        </View>

        {!searchBarDetails.focused ? (
          <View style={[styles.iconWrappers, styles.message]}>
            <IconButton icon="message-reply-text-outline" size={20} />
          </View>
        ) : null}

        {/* Drawer */}
        <Drawer
          visible={openUserProfileDrawer}
          onDismiss={handleCloseDrawer}
          style={styles.drawerContainer}
        >
          <Drawer.Section title="Some title">
            <Text>Hello</Text>
          </Drawer.Section>
        </Drawer>
      </View>

      {/* Portal */}

      {searchBarDetails.focused ? (
        <PaperProvider>
          <Portal>
            <Modal
              visible={searchBarDetails.focused}
              anchor={modelAchorRef.current}
              style={styles.modalStyles}
              contentContainerStyle={styles.modalContainerStyles}
            >
              <View style={styles.modalViewContainer}>
                <ScrollView>
                  <Text>
                    Example Modal. Click outside this area to dismiss.
                  </Text>
                  <Text>
                    Example Modal. Click outside this area to dismiss.
                  </Text>
                  <Text>
                    Example Modal. Click outside this area to dismiss.
                  </Text>
                  <Text>
                    Example Modal. Click outside this area to dismiss.
                  </Text>
                  <Text>
                    Example Modal. Click outside this area to dismiss.
                  </Text>
                  <Text>
                    Example Modal. Click outside this area to dismiss.
                  </Text>
                  <Text>
                    Example Modal. Click outside this area to dismiss.
                  </Text>
                  <Text>
                    Example Modal. Click outside this area to dismiss.
                  </Text>
                  <Text>
                    Example Modal. Click outside this area to dismiss.
                  </Text>
                  <Text>
                    Example Modal. Click outside this area to dismiss.
                  </Text>
                  <Text>
                    Example Modal. Click outside this area to dismiss.
                  </Text>
                  <Text>
                    Example Modal. Click outside this area to dismiss.
                  </Text>
                  <Text>
                    Example Modal. Click outside this area to dismiss.
                  </Text>
                  <Text>
                    Example Modal. Click outside this area to dismiss.
                  </Text>
                  <Text>
                    Example Modal. Click outside this area to dismiss.
                  </Text>
                  <Text>
                    Example Modal. Click outside this area to dismiss.
                  </Text>
                  <Text>
                    Example Modal. Click outside this area to dismiss.
                  </Text>
                  <Text>
                    Example Modal. Click outside this area to dismiss.
                  </Text>
                  <Text>
                    Example Modal. Click outside this area to dismiss.
                  </Text>
                  <Text>
                    Example Modal. Click outside this area to dismiss.
                  </Text>
                  <Text>
                    Example Modal. Click outside this area to dismiss.
                  </Text>
                  <Text>
                    Example Modal. Click outside this area to dismiss.
                  </Text>
                  <Text>
                    Example Modal. Click outside this area to dismiss.
                  </Text>
                  <Text>
                    Example Modal. Click outside this area to dismiss.
                  </Text>
                  <Text>
                    Example Modal. Click outside this area to dismiss.
                  </Text>
                  <Text>
                    Example Modal. Click outside this area to dismiss.
                  </Text>
                  <Text>
                    Example Modal. Click outside this area to dismiss.
                  </Text>
                  <Text>
                    Example Modal. Click outside this area to dismiss.
                  </Text>
                  <Text>
                    Example Modal. Click outside this area to dismiss.
                  </Text>
                  <Text>
                    Example Modal. Click outside this area to dismiss.
                  </Text>
                  <Text>
                    Example Modal. Click outside this area to dismiss.
                  </Text>
                  <Text>
                    Example Modal. Click outside this area to dismiss.
                  </Text>
                  <Text>
                    Example Modal. Click outside this area to dismiss.
                  </Text>
                  <Text>
                    Example Modal. Click outside this area to dismiss.
                  </Text>
                  <Text>
                    Example Modal. Click outside this area to dismiss.
                  </Text>
                  <Text>
                    Example Modal. Click outside this area to dismiss.
                  </Text>
                  <Text>
                    Example Modal. Click outside this area to dismiss.
                  </Text>
                </ScrollView>
              </View>
            </Modal>
          </Portal>
        </PaperProvider>
      ) : null}
    </React.Fragment>
  );
};

export default Header;
