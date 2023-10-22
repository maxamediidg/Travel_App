import { View, Text, ScrollView ,Image, TouchableOpacity, Button} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Mountains } from '../assets';

const ItemScreen = () => {
    const navigation = useNavigation();
  return (
   <SafeAreaView className=" flex-1 bg-white relative">
    <ScrollView className="flex-1 px-4 py-6">
        <View className="relative bg-white shadow-lg">
         <View>
         <Text className="text-[20px] text-[#0B646B] font-bold">
            Which country do you like to Travel?{" "}
          </Text>
         </View>
            <Image 
           
            source={
                {
                 uri : "https://cdn.pixabay.com/photo/2017/07/11/18/07/bolivia-2494518_1280.jpg" 
                }
            }
          className="w-full h-40 object-cover rounded-2xl"
          
            />

          <View className="absolute inset-x-0 bottom-5 justify-between px-6">
            <View className="flex-row space-x-2 items-center"></View>

            </View>            


        </View>
        

<View className="mt-4 flex-row items-center justify-between">

 
<Button className="px-2 font-bold rounded-md"
  style={{fontSize: 15, color: 'green'}}
  styleDisabled={{color: 'red'}}
  onPress={() => this._handlePress()}
  title="BOOking Now"
>
</Button>

 
<Button
  style={{fontSize: 20, color: 'green'}}
  styleDisabled={{color: 'red'}}
  onPress={() => this._handlePress()}
  title="Check Out"
>
</Button>
 

</View>

<View className="w-full bg-cyan-50">
    <Text className="text-[#2C7379] text-[28px] font-bold">Welcome To your journey</Text>
    <Text className="font-bold">A journey is always pleasant to me. It not only gives us entertainment, it is helpful to teach over different unknown issues as well. The most important benefit of travelling is the excellent opportunity to gather knowledge. The knowledge earned in first hand experienced cannot be found on books or any other place. So, people like to travel and it a trend for a long past. But sometimes the journeys are not pleasant and the travellers have to undergo different unexpected situation during the trips.</Text>
</View>
<View>
          <Text className="text-[36px] text-[#0B646B] font-bold">
            Discover{" "}
          </Text>
          <Text className="text-[#527283] text-[20px]">Save Trip </Text>
        </View>

      <View>
        <Text className="text-[20px] text-[#0B646B] font-bold">Amazing places</Text>
        <Image source={Mountains}  className="w-full h-40 object-cover rounded-2xl" />
       
      </View>
      <View>
        <Text className="text-[20px] text-[#0B646B] font-bold"></Text>
        <Image source={{uri : "https://cdn.pixabay.com/photo/2014/12/10/06/46/venetian-562759_1280.jpg"}}  className="w-full h-40 object-cover rounded-2xl" />
       
      </View>
      <View>
        <Text className="text-[20px] text-[#0B646B] font-bold px-2 bottom-10"></Text>
        <Image source={{uri : "https://cdn.pixabay.com/photo/2017/03/01/04/37/utah-2107507_1280.jpg"}}  className="w-full h-40 object-cover rounded-2xl" />
       
      </View>
    </ScrollView>

   </SafeAreaView>
  )
}
export default ItemScreen;