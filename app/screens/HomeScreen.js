import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Carousel from "./Carousel";
import FoodTypes from "./FoodTypes";
import QuickFood from "./QuickFood";
import FilterButtons from "./FilterButtons";
import hotels from "../data/hotels";
import MenuItem from "./MenuItem";

const HomeScreen = () => {
  const data = hotels;
  return (
    <ScrollView style={styles.safearea}>
      <View style={styles.searchbar}>
        <TextInput
          style={{ fontSize: 17 }}
          placeholder="Search for your fav food"
        />
        <AntDesign name="search1" size={24} color="#E52850" />
      </View>
      <Carousel />
      <FoodTypes />
      <QuickFood />
      <FilterButtons />
      {data.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safearea: {
    marginTop: 22,
  },
  searchbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    margin: 10,
    padding: 10,
    borderColor: "#C0C0C0",
    borderRadius: 7,
  },
});
