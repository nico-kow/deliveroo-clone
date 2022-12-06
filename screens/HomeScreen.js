import { Text, SafeAreaView, View, Image, StyleSheet, StatusBar, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ChevronDownIcon, UserIcon, AdjustmentsVerticalIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';


const HomeScreen = () => {
    const navigation = useNavigation();

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
            <ScrollView >
                <Categories />
            </ScrollView>

            {/** Featured Rows */}
            <FeaturedRow
                title="TestTitle 1"
                description="TestDescription 1"
                id="1"
            />
            <FeaturedRow
                title="TestTitle 2"
                description="TestDescription 2"
                id="2"
            />
            <FeaturedRow
                title="TestTitle 2"
                description="TestDescription 2"
                id="3"
            />
        </SafeAreaView>
    )
}

export default HomeScreen