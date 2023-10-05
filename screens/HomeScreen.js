import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { colors } from '../theme'

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
        <View className='px-4'>
            <View className='flex-row justify-between items-center'>
                <Text className={`${colors.heading} font-bold text-xl`}>Recent Trips</Text>
                <TouchableOpacity>
                    <Text className={colors.heading}>Add Trip</Text>
                </TouchableOpacity>
            </View>
            <View>
                <FlatList />
            </View>
        </View>
    </SafeAreaView>
  )
}

