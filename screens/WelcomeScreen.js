import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../theme'
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {
    const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View className='flex justify-around h-full'>
        <View className='flex-row justify-center mt-10'>
            <Image source={require('../assets/gif/welcome.gif')}
                className='w-96 h-96 shadow'/>
        </View>
        <View className='mx-5 mb-20'>
            <Text className={`text-center font-bold text-4xl mb10 ${colors.heading}`}>Expenses</Text>
            <TouchableOpacity className='p-3 rounded-full shadow mb-5' style={{backgroundColor: colors.button}}>
                <Text onPress={() => navigation.navigate('SignIn')} className='text-center text-white text-lg font-bold'>
                    Sign In
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}  className='p-3 rounded-full shadow' style={{backgroundColor: colors.button}}>
                <Text className='text-center text-white text-lg font-bold'>
                    Sign Up
                </Text>
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}