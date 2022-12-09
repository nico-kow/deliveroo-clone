import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurant, setRestaurant } from '../features/restaurantSlice';
import { XCircleIcon } from 'react-native-heroicons/solid';
import { removeFromBasket, selectBasketTotal, selectedBasketItems } from '../features/basketSlice';
import _ from 'lodash';
import { DIRECTUS_BASE_URL } from '@env';

const BasketScreen = () => {

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const restaurant = useSelector((state) => getRestaurant(state));
  const basketItems = useSelector((state) => selectedBasketItems(state))
  const basketTotal = useSelector((state) => selectBasketTotal(state))

  const basketItemsGroupedById = _.groupBy(basketItems, (item) => item.id);

  const removeDish = (dish) => {
    dispatch(removeFromBasket(dish));
  };

  return (
    <SafeAreaView className="flex-1">
      {/** Header */}
      <View className="bg-white pt-12 pb-4 items-center space-y-1">
        <Text className="text-lg font-bold">Warenkorb</Text>
        <Text className="text-gray-500">{restaurant.Name}</Text>
        <TouchableOpacity
          className="absolute top-10 right-0.5"
          onPress={() => navigation.goBack()}
        >
          <XCircleIcon size={50} color="#00CCBB" />
        </TouchableOpacity>
      </View>

      {/** Deliver time */}
      <View className="flex-row bg-white px-2 py-4 space-x-4 items-center mt-4">
        <Image
          source={{
            uri: 'https://links.papareact.com/wru',
          }}
          className="h-7 w-7 bg-gray-300 rounded-full"
        />
        <Text className="flex-1">Lieferung in 50-75 Minuten</Text>
        <TouchableOpacity>
          <Text className="text-[#00CCBB]">Ändern</Text>
        </TouchableOpacity>
      </View>

      {/** Menu Items */}
      <ScrollView
        className=" mt-4"
      >
        {
          _.entries(basketItemsGroupedById).map((itemGroup) => {

            const dish = itemGroup[1][0];

            return <View
              key={itemGroup[0]}
              className="flex-row items-center space-x-4 py-2 px-2 bg-white"
            >
              <Text className="text-[#00CCBB]">{`${itemGroup[1].length} x`}</Text>
              <Image
                className="h-10 w-10 rounded-full"
                source={{
                  uri: dish.imgUrl
                }}
              />
              <Text className="flex-1">{dish.name}</Text>
              <Text>{`${dish.price} €`}</Text>
              <TouchableOpacity
                onPress={() => removeDish(dish)}
              >
                <Text className="text-[#00CCBB]">Entfernen</Text>
              </TouchableOpacity>
            </View>
          })
        }
      </ScrollView>
      <View className="bg-white absolute bottom-0 px-2 w-full py-6 space-y-4 z-50 rounded-t-md">
        <View className="flex-row justify-between">
          <Text className="text-gray-500">Zwischensumme</Text>
          <Text className="text-gray-500">{`${basketTotal} €`}</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-500">Steuern</Text>
          <Text className="text-gray-500">{`${4.99} €`}</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-lg font-bold">Gesamt</Text>
          <Text className="text-lg font-bold">{`${parseFloat(basketTotal)+4.99} €`}</Text>
        </View>
        <TouchableOpacity className="bg-[#00CCBB] items-center p-4 rounded-sm">
          <Text className="text-white font-bold text-lg">Bestellen</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default BasketScreen