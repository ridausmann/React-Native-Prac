import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import HomeScreen from "./app/screens/HomeScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
