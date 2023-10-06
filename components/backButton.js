import { useNavigation } from '@react-navigation/core';
import { View, Text, TouchableOpacity } from 'react-native'
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { colors } from '../theme';

export default function BackButton() {
    const navigation= useNavigation()
  return (
    <TouchableOpacity 
        onPress={() => navigation.goBack()}
        className='bg-white rounded-full w-8 h-8'>
        <ChevronLeftIcon 
            size={30}
            color={colors.button}/>
    </TouchableOpacity>
  )
}