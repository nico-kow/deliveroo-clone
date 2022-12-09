import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketTotal, selectedBasketItems } from '../features/basketSlice'
import { useNavigation } from '@react-navigation/native'

const BasketBar = () => {
    const items = useSelector((state) => selectedBasketItems(state));
    const navigation = useNavigation();
    const basketTotal = useSelector(selectBasketTotal);

  return (
    <View className="absolute w-full z-50 bottom-4">
     <TouchableOpacity className="flex-row space-x-2 items-center bg-[#00CCBB] m-4 p-4 rounded-lg">
        <Text className="font-extrabold text-lg text-white bg-[#01A296] py-1 px-2">{items.length}</Text>
        <Text className="flex-1 text-center text-white font-extrabold text-lg">Warenkorb ansehen</Text>
        <Text className="text-lg text-white font-bold">{basketTotal + ' €'}</Text>
     </TouchableOpacity>
    </View>
  )
}

export default BasketBar