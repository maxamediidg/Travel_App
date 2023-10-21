import { View, Text, Platform, StatusBar, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import { HeroImage } from "../assets";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <SafeAreaView className="bg-white-100 flex-1 relative">
      {/* first section */}
      <View className="flex-row px-12 mt-12 items-center space-x-2">
        <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
          <Text className="text-[#4DABB7] text-3xl font-semibold">Go</Text>
        </View>
        <Text className="text-[#2A2B4B] text-3xl font-semibold">Travel</Text>
      </View>

      {/* second-section */}
      <View className="px-6 mt-8 space-y-3">
        <Text className="text-[#3c6072] text-[42px]">Enjoy the trip with</Text>
        <Text className="text-[#00BCC9] text-[38px] font-bold">
          Good Moments
        </Text>
        <Text className="text-[#3C6072] text-base">
          A journey is always pleasant to me. It not only gives us
          entertainment.
        </Text>
      </View>

      {/* circle section */}

      <View className="w-[400px] h-[400px] bg-[#00BCC9] rounded-full absolute bottom-36 -right-36"></View>
      <View className="w-[400px] h-[400px] bg-[#E99265] rounded-full absolute -bottom-28 -left-36"></View>

      {/* Image container */}

      <View className="flex-1 relative items-center justify-center ">
        <Image source={HeroImage} className="w-full h-full object-cover mt-20" />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
