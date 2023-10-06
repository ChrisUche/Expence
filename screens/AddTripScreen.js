import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native'
import { colors } from '../theme'
import BackButton from '../components/backButton'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/core';

export default function AddTripScreen() {
    const [place, setPlace] = useState('');
    const [country, setCountry] = useState('');

    const navigation = useNavigation();

    const handleAddTrip = ()=>{
        if(place && country){
            //good to go
            navigation.navigate('Home')
        }else{
            //show error message
        }
    }
  return (
    <SafeAreaView>
      <View className='flex justify-between h-full mx-4'>
        <View>
            <View className='relative mt-5'>
                <View className='absolute top-0 left-0'> 
                    <BackButton/>
                </View>
                <Text className={`${colors.heading} font-bold text-xl text-center `}>Add Trip</Text>
            </View>

            <View className='flex-row justify-center my-3 mt-5'>
                <Image 
                source={require('../assets/png/4.png')}
                className='w-72 h-72'/>
            </View>
            <View className='space-x-2 mx-2'>
                <Text 
                    className ={`${colors.heading} text-lg font-bold`}>Where On Earth</Text>
                <TextInput
                    value={place}
                    onChangeText={value => setPlace(value)} 
                    className='p-4 bg-white rounded-full mb-3'/>
                <Text 
                    className ={`${colors.heading} text-lg font-bold`}>Which Country</Text>
                <TextInput
                    value={country}
                    onChangeText={value => setCountry(value)} 
                    className='p-4 bg-white rounded-full mb-3'/>
            </View>
        </View>
        <View>
            <TouchableOpacity
                onPress={handleAddTrip}
                style={{backgroundColor: colors.button}}
                className='my-6 rounded-full p-3 shadow-sm mx-2'>
                <Text className='text-white text-lg text-center font-bold'>Add Trip</Text>
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}