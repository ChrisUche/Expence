import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native'
import { colors } from '../theme'
import BackButton from '../components/backButton'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/core';

export default function SignInScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const handleSubmit = ()=>{
        if(email && password){
            //good to go
            navigation.goBack();
            navigation.navigate('Home');
        }else{
            //show error message
        }
    }
  return (
    <SafeAreaView>
      <View className='flex justify-between h-full mx-4'>
        <View>
            <View className='relative'>
                <View className='absolute top-0 left-0'> 
                    <BackButton/>
                </View>
                <Text className={`${colors.heading} font-bold text-xl text-center `}>Sign In</Text>
            </View>

            <View className='flex-row justify-center my-3 mt-5'>
                <Image 
                source={require('../assets/png/login.png')}
                className='w-80 h-80'/>
            </View>
            <View className='space-x-2 mx-2'>
                <Text 
                    className ={`${colors.heading} text-lg font-bold`}>Email</Text>
                <TextInput
                    value={email}
                    onChangeText={value => setEmail(value)} 
                    className='p-4 bg-white rounded-full mb-3'/>
                <Text 
                    className ={`${colors.heading} text-lg font-bold`}>Password</Text>
                <TextInput
                    value={password}
                    secureTextEntry
                    onChangeText={value => setPassword(value)} 
                    className='p-4 bg-white rounded-full mb-3'/>
                <TouchableOpacity>
                    <Text>Forget Password</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View>
            <TouchableOpacity
                onPress={handleSubmit}
                style={{backgroundColor: colors.button}}
                className='my-6 rounded-full p-3 shadow-sm mx-2'>
                <Text className='text-white text-lg text-center font-bold'>Sign In</Text>
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}