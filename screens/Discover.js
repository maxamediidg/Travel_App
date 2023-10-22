import { View, Text, Image, ScrollView, TouchableOpacity, ActivityIndicator } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Attaractions, Avatar, Restaurants } from "../assets";
import MenuContainer from "../components/MenuContainer";
import { FontAwesome } from "@expo/vector-icons";

import { Hotels } from "../assets";
import ItemCartContainer from "../components/ItemCartContainer";

const Discover = () => {
  const navigation = useNavigation();

const [type, setType] = useState(Restaurants);
const [IsLoading, setIsLoading] = useState(false)
const [MainData, setMainData] = useState([]);


  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <View className="flex-row items-center justify-between px-8">
        <View>
          <Text className="text-[40px] text-[#0B646B] font-bold">
            Discover{" "}
          </Text>
          <Text className="text-[#527283] text-[36px]">the beauty today </Text>
        </View>

        <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center shadow-lg">
          <Image
            source={Avatar}
            className="w-full h-full rounded-md object-cover"
          />
        </View>
      </View>

      <View className="flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 shadow-lg mt-4">
        <GooglePlacesAutocomplete
          GooglePlacesDetailsQuery={{ fields: "geometry" }}
          placeholder="Search"
          fetchDetails={true}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(details?.geometry?.viewport);
          }}
          query={{
            key: "AIzaSyCXPswkUclDbPHRub5VaBaTCn2Ofekh8Jo",
            language: "en",
          }}
        />
      </View>
      {/* Menu container */}
{IsLoading ? <View className="flex-1 items-center justify-center">
    <ActivityIndicator size="large" color="#00646" />

</View> :
 <ScrollView>
 <View className="flex-row items-center justify-between p- mt-0">
   <MenuContainer
     key={"hotel"}
     title="Hotels"
     ImageSrc={Hotels}
     type={type}
     setType={setType}
   />
   <MenuContainer
     key={"attaracions"}
     title="Attaractions"
     ImageSrc={Attaractions}
     type={type}
     setType={setType}
   />

   <MenuContainer
     key={"Restaurants"}
     title="Restaurants"
     ImageSrc={Restaurants}
     type={type}
     setType={setType}
   />
 </View>

 <View>
   <View className="flex-row items-center justify-between px-4 mt-8">
     <Text className="text-[#2C7379] text-[28px] font-bold">
       Top Tips
     </Text>
     <TouchableOpacity className="flex-row items-center justify-center space-x-2">
       <Text className="text-[#2C7379] text-[28px] font-bold">
         Explore
       </Text>
       <FontAwesome name="long-arrow-right" size={24} color="#ABC4C7" />
     </TouchableOpacity>
   </View>

   <View className="px-4 mt-8 flex-row items-center justify-evenly flex-wrap">
<ItemCartContainer key={"101"}  ImageSrc={"https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704_1280.jpg"} title="Maldives" location="Doha" />
<ItemCartContainer key={"102" }  ImageSrc={"https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_1280.jpg"} title="polysnia" location="new york" />

   </View>
   <View className="px-4 mt-8 flex-row items-center justify-evenly flex-wrap">
<ItemCartContainer key={"101"}  ImageSrc={"https://cdn.pixabay.com/photo/2013/04/18/14/39/ship-105596_1280.jpg"} title="Ship nature city" location="London" />
<ItemCartContainer key={"102" }  ImageSrc={"https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_1280.jpg"} title="polysnia" location="paris" />

   </View>
   <View className="px-4 mt-8 flex-row items-center justify-evenly flex-wrap">
<ItemCartContainer key={"101"}  ImageSrc={"https://cdn.pixabay.com/photo/2016/11/21/17/34/las-vegas-1846684_1280.jpg"} title="Las Vegas Tower " location="USA" />
<ItemCartContainer key={"102" }  ImageSrc={"https://cdn.pixabay.com/photo/2017/03/09/06/30/pool-2128578_1280.jpg"} title="Swimming pool" location="Dubai" />

   </View>
 </View>
</ScrollView>

}

     
    </SafeAreaView>
  );
};

export default Discover;
