import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
} from "react-native";

const FoodTypes = () => {
  const types = [
    {
      id: "0",
      image:
        "https://st2.depositphotos.com/49005766/47396/i/600/depositphotos_473966068-stock-photo-chicken-biryani-kerala-style-chicken.jpg",
      name: "Biriyani",
    },
    {
      id: "1",
      image:
        "https://img.freepik.com/free-vector/sweet-bakery-dessert-with-strawberry_1308-111814.jpg?w=2000",
      name: "Dessert",
    },
    {
      id: "2",
      image:
        "https://img.freepik.com/free-vector/isolated-delicious-hamburger-cartoon_1308-134032.jpg",
      name: "Burger",
    },
    {
      id: "3",
      image:
        "https://img.freepik.com/premium-vector/healthy-meal-with-fresh-vegetable-salad-bowl_1639-26722.jpg",
      name: "Salad",
    },
    {
      id: "4",
      image:
        "https://img.freepik.com/premium-vector/french-sandwich-icon_273339-6.jpg",
      name: "Sandwiches",
    },
  ];
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {types.map((item, index) => (
          <View
            style={{
              margin: 10,
              alignItems: "center",
            }}
            key={index}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={{ marginTop: 6 }}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default FoodTypes;

const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});
