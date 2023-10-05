import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { colors } from '../theme'

const items = [
    {
        id: 1,
        place: 'Abuja',
        country: 'Nigeria',
    },
    {
        id: 2,
        place: 'Zanzibar',
        country: 'Tanzania',
    },
    {
        id: 3,
        place: 'Paris',
        country: 'France',
    },
    {
        id: 4,
        place: 'Los Angeles',
        country: 'America',
    },
    {
        id: 5,
        place: 'Paris',
        country: 'France',
    },
    {
        id: 6,
        place: 'Los Angeles',
        country: 'America',
    }
]

export default function HomeScreen() {

  return (
    <SafeAreaView className="flex-1">
        <View className='flex-row items-center justify-between p-4'>
            <Text className={`${colors.heading} font-bold text-3xl shadow-sm`}>Expense</Text>
            <TouchableOpacity className='p-2 px-3 bg-white border border-gray-200 rounded-full'>
                <Text className={`${colors.heading}`}>
                    Logout
                </Text>
            </TouchableOpacity>
        </View>
        <View className='flex-row justify-center items-center bg-blue-200 rounded-xl mx-4 mb-4'>
            <Image 
                source={require('../assets/png/banner.png')}
                className='w-60 h-60'
                />
        </View>
        <View className='px-4 space-y-3'>
            <View className='flex-row justify-between items-center'>
                <Text className={`${colors.heading} font-bold text-xl`}>Recent Trips</Text>
                <TouchableOpacity>
                    <Text className={colors.heading}>Add Trip</Text>
                </TouchableOpacity>
            </View>
            <View style={{height:430}}>
                <FlatList 
                    data={items}
                    numColumns={2}
                    keyExtractor={item => item.id}
                    columnWrapperStyle={{
                        justifyContent: 'space-between' //to split the trip cards
                    }}
                    showsVerticalScrollIndicator={false}
                    className='mx-1'
                    renderItem={({item}) => {
                        return(
                            <TouchableOpacity className='bg-white rounded-2xl mb-3 shadow-sm'>
                                <View>
                                    <Image 
                                        source={require('../assets/png/1.png')}
                                        className='w-36 h-36'
                                        />
                                    <Text className={`${colors.heading} font-bold`}>{item.place}</Text>
                                    <Text className={`${colors.heading} text-xs`}>{item.country}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}/>
            </View>
        </View>
    </SafeAreaView>
  )
}

