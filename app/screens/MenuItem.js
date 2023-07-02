import React from "react";
import { Pressable } from "react-native";
import { Text, View, StyleSheet, Image, ImageBackground } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const MenuItem = ({ item }) => {
  return (
    <View style={{ margin: 10 }}>
      <Pressable style={{ flexDirection: "row" }}>
        <View>
          <ImageBackground
            imageStyle={{ borderRadius: 6 }}
            style={{ aspectRatio: 5 / 6, height: 170 }}
            source={{ uri: item.image }}
          >
            <AntDesign
              style={{ position: "absolute", top: 10, right: 10 }}
              name="hearto"
              size={24}
              color="black"
            />
          </ImageBackground>
        </View>
        <View style={{ marginLeft: 10, justifyContent: "space-evenly" }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item.name}</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialIcons name="stars" size={24} color="green" />
            <Text style={styles.card}>{item.rating}</Text>
            <Text style={{ marginLeft: 3 }}>*</Text>
            <Text style={styles.card}>{item.time}mins</Text>
          </View>
          <Text style={{ fontSize: 15, color: "grey" }}>{item.adress}</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <MaterialCommunityIcons name="bike-fast" size={24} color="black" />
            <Text style={{ marginLeft: 10, fontSize: 16 }}>FREE DELIVERY</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  card: {
    marginLeft: 3,
    fontSize: 15,
    fontWeight: "400",
  },
});
