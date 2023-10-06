import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native'
import { colors } from '../theme'
import BackButton from '../components/backButton'

export default function AddTripScreen() {
  return (
    <SafeAreaView>
      <View className='flex justify-between h-full mx-4'>
        <View>
            <View className='relative mt-5'>
                <View className='absolute top-0 left-0'> 
                    <BackButton/>
                </View>
            </View>
            <Text className={`${colors.heading} font-bold text-xl text-center `}>Add Trip</Text>

            <View className='flex-row justify-center my-3 mt-5'>
                <Image 
                source={require('../assets/png/4.png')}
                className='w-72 h-72'/>
            </View>
            <View className='space-x-2 mx-2'>
                <Text className ={`${colors.heading} text-lg font-bold`}>Where On Earth</Text>
                <TextInput className='p-4 bg-white rounded-full mb-3'/>
                <Text className ={`${colors.heading} text-lg font-bold`}>Which Country</Text>
                <TextInput className='p-4 bg-white rounded-full mb-3'/>
            </View>
        </View>
        <View>
            <TouchableOpacity
                style={{backgroundColor: colors.button}}
                className='my-6 rounded-full p-3 shadow-sm mx-2'>
                <Text className='text-white text-lg text-center font-bold'>Add Trip</Text>
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}