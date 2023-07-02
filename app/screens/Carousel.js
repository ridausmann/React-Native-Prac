import React from "react";
import { Text, View, SafeAreaView, StyleSheet, TextInput } from "react-native";
import { SliderBox } from "react-native-image-slider-box";

const Carousel = () => {
  const images = [
    "https://cdn.grabon.in/gograbon/images/web-images/uploads/1658919135375/swiggy-coupons.jpg",
    "https://www.tristatetechnology.com/tristate-website/blog/wp-content/uploads/2019/10/swiggy-food-delivery-1.jpg",
    "https://smarther.co/wp-content/uploads/2022/07/WHY-DO-YOU-NEED-A-CLOUD-KITCHEN-BUSINESS-MODEL-IN-YOUR-RESTAURANT-A-COMPLETE-GUIDE-4.png",
  ];
  return (
    <SliderBox
      images={images}
      autoPlay
      circleLoop
      dotColor="#13274F"
      inactiveDotColor="#90A4AE"
      ImageComponentStyle={{
        borderRadius: 6,
        width: "94%",
      }}
    />
  );
};

export default Carousel;

const styles = StyleSheet.create({});
