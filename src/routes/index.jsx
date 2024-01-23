import React, { Suspense } from "react";
import Fallback from "../components/Fallback";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { RouteList } from "./routerList";
import { NativeRouter as Router, Routes, Route } from "react-router-native";
import { StyleSheet, View } from "react-native";
const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    width: "100%",
  },
  content: {
    height: "80%",
    marginLeft: 15,
    marginRight: 7,
  },
});
const RoutesComponent = () => {
  return (
    <Router basename="/">
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <Suspense fallback={<Fallback />}>
            <Routes>
              {RouteList.map(({ component: Component, exact, path }, index) => {
                return (
                  <Route
                    key={index}
                    exact={exact}
                    path={path}
                    element={<Component />}
                  />
                );
              })}
            </Routes>
          </Suspense>
        </View>
        <Navbar />
      </View>
    </Router>
  );
};

export default RoutesComponent;
