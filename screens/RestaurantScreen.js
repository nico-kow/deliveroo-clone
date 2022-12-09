import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/core';
import axios from 'axios';
import { ArrowLeftIcon, QuestionMarkCircleIcon } from 'react-native-heroicons/outline';
import { StarIcon, MapPinIcon, ChevronRightIcon } from 'react-native-heroicons/solid';
import DishRow from '../components/DishRow';
import BasketBar from '../components/BasketBar';
import {DIRECTUS_BASE_URL, DIRECTUS_JWT_TOKEN} from '@env'

const RestaurantScreen = () => {

    const navigation = useNavigation();
    const [restaurant, setRestaurant] = useState(null)

    const {
        params: {
            id,
        }
    } = useRoute();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    useEffect(() => {
        axios.get(DIRECTUS_BASE_URL+'/items/Restaurants/' + id + '?fields=*,Kategorien.Kategorien_id.Name,Gerichte.*',
            {
                headers: {
                    "Authorization": "Bearer "+DIRECTUS_JWT_TOKEN
                }
            })
            .then((response) => {
                {
                    setRestaurant(response.data.data);
                }
            })

    }, [id])



    return (
        <View>

            <BasketBar />
            <ScrollView
                contentContainerStyle={{
                    paddingBottom: 150
                }}
            >
                {/** Header Image */}
                <View className="bg-slate-800 w-full h-56 relative">
                    <Image
                        source={{
                            uri: DIRECTUS_BASE_URL+'/assets/' + restaurant?.Bild
                        }}
                        className="w-full h-56 p-4 opacity-80"
                    />
                    <TouchableOpacity
                        className="absolute top-14 left-5 p-2 bg-white rounded-full"
                        onPress={
                            () => {
                                navigation.goBack()
                            }
                        }
                    >
                        <ArrowLeftIcon size={20} color="#00CCBB" />
                    </TouchableOpacity>
                </View>

                {/** Body */}
                <View className="bg-white pt-4 px-2">

                    <Text className="text-2xl font-bold">{restaurant?.Name}</Text>

                    {/** Rating and Adress */}
                    <View className="flex-row space-x-2 items-center mt-2">
                        <View className="flex-row items-center space-x-1">
                            <StarIcon color="green" size={22} opacity={0.5} />
                            <Text className="text-xs text-gray-500">
                                <Text className="text-green-600">{parseFloat(restaurant?.Bewertung).toFixed(1)}</Text>
                                │{restaurant?.Kategorien[0].Kategorien_id.Name}
                            </Text>
                        </View>
                        <View className="flex-row items-center space-x-1">
                            <MapPinIcon color="gray" size={22} opacity={0.4} />
                            <Text className="text-xs text-gray-500 text-ellipsis w-3/4">
                                {restaurant?.Adresse}
                            </Text>
                        </View>
                    </View>

                    {/** Allergies */}
                    <TouchableOpacity className="flex-row mt-4 items-center py-4 space-x-2 border-gray-300 border-y">
                        <QuestionMarkCircleIcon size={22} color="gray" />
                        <Text className="pl-2 font-bold text-md flex-1">Hast du eine Allergie?</Text>
                        <ChevronRightIcon size={22} color="#00CCBB" />
                    </TouchableOpacity>
                </View>

                {/** Menu */}
                <View className="pt-6">
                    <Text className="text-xl font-bold px-2 mb-4">Menü</Text>
                    {restaurant?.Gerichte?.map((gericht) => {
                        return <DishRow
                            key={gericht.id}
                            id={gericht.id}
                            name={gericht.Name}
                            shortDescription={gericht.Kurzbeschreibung}
                            imgUrl={DIRECTUS_BASE_URL+'/assets/' + gericht.Bild}
                            price={gericht.Preis}
                        />
                    })}
                </View>

            </ScrollView>
        </View>
    )
}

export default RestaurantScreen