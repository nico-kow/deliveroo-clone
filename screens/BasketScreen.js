import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurant, setRestaurant } from '../features/restaurantSlice';
import { XCircleIcon } from 'react-native-heroicons/solid';

const BasketScreen = () => {

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const restaurant = useSelector((state) => getRestaurant(state));


  return (
    <SafeAreaView>
      {/** Header */}
      <View className="bg-white pt-12 pb-4 items-center space-y-1">
        <Text className="text-lg font-bold">Warenkorb</Text>
        <Text className="text-gray-500">{restaurant.Name}</Text>
        <TouchableOpacity 
        className="absolute top-10 right-2"
        onPress={() => navigation.goBack()}
        >
          <XCircleIcon size={50} color="#00CCBB" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default BasketScreen