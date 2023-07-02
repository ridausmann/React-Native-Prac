import React from "react";
import { Pressable } from "react-native";
import { Text, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const FilterButtons = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Pressable style={styles.pressable_btn}>
        <Text>Filter</Text>
        <MaterialCommunityIcons name="filter-variant" size={20} color="black" />
      </Pressable>
      <Pressable style={styles.pressable_btn}>
        <Text>Sort By Rating</Text>
      </Pressable>
      <Pressable style={styles.pressable_btn}>
        <Text>Sort By Price</Text>
      </Pressable>
    </View>
  );
};

export default FilterButtons;

const styles = StyleSheet.create({
  pressable_btn: {
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "D0D0D0",
    padding: 10,
    borderRadius: 20,
    justifyContent: "space-around",
    width: 120,
  },
});
