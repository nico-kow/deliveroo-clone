import { Text, SafeAreaView, View, Image, StyleSheet, StatusBar, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ChevronDownIcon, UserIcon, AdjustmentsVerticalIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import axios from "axios";
import useFeatures from '../hooks/UseFeatures';


const HomeScreen = () => {
    const navigation = useNavigation();
    const { data, isLoading, isSuccess } = useFeatures();


    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <SafeAreaView className=" pt-9 bg-white">

            {/** Header */}
            <View className="bg-white">
                <View className="flex-row pb-3 items-center space-x-2 px-2">
                    <Image
                        source={{
                            uri: 'https://links.papareact.com/wru',
                        }}
                        className="h-7 w-7 bg-gray-300 rounded-full"
                    />
                    <View className="flex-1">
                        <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
                        <View className="flex-row items-center space-x-1">
                            <Text className="font-bold text-xl">Current Location</Text>
                            <ChevronDownIcon size={20} color="#00CCBB" />
                        </View>
                    </View>
                    <UserIcon size={35} color="#00CCBB" />
                </View>

                {/** Searchbar */}
                <View className="flex-row items-center space-x-2 mb-2 px-2">
                    <View className="flex-row flex-1 bg-gray-200 space-x-2 px-3 py-2 items-center rounded-xl">
                        <MagnifyingGlassIcon size={20} color="gray" />
                        <TextInput
                            placeholder='Restaurants and cuisines'
                            keyboardType='default'
                        />
                    </View>
                    <AdjustmentsVerticalIcon size={20} color="#00CCBB" />
                </View>
            </View>

            {/** Body */}

            {/** Categories */}
            <ScrollView
                className="bg-gray-100"
                contentContainerStyle={{
                    paddingBottom: 150,
                }}
            >
                <Categories />

                {/** Featured Rows */}
                {
                    isSuccess && (
                        <>
                            {
                                data?.map((category) => {
                                    return <FeaturedRow
                                        key={category.id}
                                        id={category.id}
                                        title={category.Name}
                                        description={category.Kurzbeschreibung}
                                        restaurants={category.Restaurants}
                                    />
                                })
                            }
                        </>
                    )
                }
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen