import { Dimensions, FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { colors } from '../theme'
import randomImage from '../assets/png/randomImage'
import EmptyList from '../components/emptyList';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import BackButton from '../components/backButton';
import ExpenseCard from '../components/expenseCard';
import { getDocs, query, where } from '@firebase/firestore';
import { expensesRef } from '../config/firebase';

const { width } = Dimensions.get('window');
const isSmallScreen = width <= 375;

const items = [
    {
        id: 1,
        title: 'bought coffee',
        amount: '15',
        category: 'food',
    },
    {
        id: 2,
        title: 'bought a shirt',
        amount: '20',
        category: 'shopping',
    },
    {
        id: 3,
        title: 'booked a ride',
        amount: '80',
        category: 'transportation',
    },
    {
        id: 4,
        title: 'watched a movie',
        amount: '60',
        category: 'entertaiment',
    },
]

export default function TripExpensesScreen(props) {
    const {id, place, country} = props.route.params; //this data is fetched from homescreen
    const navigation = useNavigation();
    const [expenses, setExpenses] = useState([]);


    const isFocused = useIsFocused();

    //fetchTrips is to fetch the trips from firebase/firestore
    const fetchExpenses = async ()=>{
        const q = query(expensesRef, where("tripId", "==", id));
        const querySnapshot = await getDocs(q);
        let data = []
        querySnapshot.forEach(doc=>{
            data.push({...doc.data(), id: doc.id})
        })
        setExpenses(data);
    }

    //useEffect calls fetchTrips when ever a components molds
    useEffect(()=>{
        if(isFocused)
        fetchExpenses();
    },[isFocused])
  return (
    <SafeAreaView className="flex-1">
        <View className='px-4'>
            <View className='relative mt-5'>
                    <View className='absolute top-2 left-0 z-10'> 
                        <BackButton/>
                    </View>
                    <View>
                        <Text className={`${colors.heading} font-bold text-xl text-center `}>{place}</Text>
                        <Text className={`${colors.heading} text-xs text-center `}>{country}</Text>
                    </View>
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
                    <TouchableOpacity onPress={() => navigation.navigate('AddExpence', {id, place, country})}>
                        <Text className={colors.heading}>Add Expenses</Text>
                    </TouchableOpacity>
                </View>
                <View style={{height:430}}>
                    <FlatList 
                        data={expenses}
                        ListEmptyComponent={<EmptyList message={'You have not recorded any Expenses yet'}/>}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                        className='mx-1'
                        renderItem={({item}) => {
                            return(
                                <ExpenseCard item={item}/>
                            )
                        }}/>
                </View>
            </View>
        </View>
    </SafeAreaView>
  )
}

