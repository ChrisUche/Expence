import { Dimensions, FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { colors } from '../theme'
import randomImage from '../assets/png/randomImage'
import EmptyList from '../components/emptyList';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../components/backButton';

const { width } = Dimensions.get('window');
const isSmallScreen = width <= 375;

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
    const navigation = useNavigation()
  return (
    <SafeAreaView className="flex-1">
        <View className='px-4'>
            <View className='relative mt-5'>
                    <View className='absolute top-0 left-0'> 
                        <BackButton/>
                    </View>
                    <Text className={`${colors.heading} font-bold text-xl text-center `}>Add Trip</Text>
            </View>
            <View className='flex-row justify-center items-center  rounded-xl mb-4'>
                <Image 
                    source={require('../assets/png/7.png')}
                    className='w-80 h-80'
                    />
            </View>
            <View className=' space-y-3'>
                <View className='flex-row justify-between items-center'>
                    <Text className={`${colors.heading} font-bold text-xl`}>Expenses</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('AddTrip')}>
                        <Text className={colors.heading}>Add Expenses</Text>
                    </TouchableOpacity>
                </View>
                <View style={{height:430}}>
                    <FlatList 
                        data={items}
                        ListEmptyComponent={<EmptyList message={'You have not recorded any Expenses yet'}/>}
                        numColumns={2}
                        keyExtractor={item => item.id}
                        columnWrapperStyle={{
                            justifyContent: 'space-between' //to split the trip cards
                        }}
                        showsVerticalScrollIndicator={false}
                        className='mx-1'
                        renderItem={({item}) => {
                            return(
                                <TouchableOpacity onPress={() => navigation.navigate('TripExpenses')} className='bg-white p-3 rounded-2xl mb-3 shadow-sm'>
                                    <View>
                                        <Image 
                                            source={randomImage()}
                                            className={`${isSmallScreen ? 'w-32 h-24 mb-2' : 'w-36 h-36 mb-2'}`} //because screen sizes differ on small screens 24 is used else 36
                                            />
                                        <Text className={`${colors.heading} font-bold`}>{item.place}</Text>
                                        <Text className={`${colors.heading} text-xs`}>{item.country}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        }}/>
                </View>
            </View>
        </View>
    </SafeAreaView>
  )
}

