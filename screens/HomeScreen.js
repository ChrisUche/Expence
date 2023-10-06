import { Dimensions, FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { colors } from '../theme'
import randomImage from '../assets/png/randomImage'
import EmptyList from '../components/emptyList';
import { useNavigation } from '@react-navigation/native';

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
                <TouchableOpacity onPress={() => navigation.navigate('AddTrip')}>
                    <Text className={colors.heading}>Add Trip</Text>
                </TouchableOpacity>
            </View>
            <View style={{height:430}}>
                <FlatList 
                    data={items}
                    ListEmptyComponent={<EmptyList message={'You have not recorded any trips yet'}/>}
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
    </SafeAreaView>
  )
}

