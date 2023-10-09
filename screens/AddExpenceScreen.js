import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { colors } from '../theme'
import BackButton from '../components/backButton'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/core';
import { categories } from '../constants'
import { addDoc } from '@firebase/firestore';
import { expensesRef } from '../config/firebase';
import Loading from '../components/loading';


export default function AddTripScreen(props) {
    let {id} = props.route.params;
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();

    const handleAddExpence = async ()=>{
        if(title && amount && category){
            //good to go
            // navigation.goBack()
            setLoading(true);
            let doc = await addDoc(expensesRef, {
              title,
              amount,
              category,
              tripId: id
            })
            setLoading(false);
            if(doc && doc.id) navigation.goBack();

        }else{
            //show error message
        }
    }
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{paddingHorizontal:15,
      paddingTop:10}}
      showsVerticalScrollIndicator={false}>
        <View>
            <View className='relative mt-5'>
                <View className='absolute top-0 left-0'> 
                    <BackButton/>
                </View>
                <Text className={`${colors.heading} font-bold text-xl text-center `}>Add Expense</Text>
            </View>

            <View className='flex-row justify-center my-3 mt-5'>
                <Image 
                source={require('../assets/png/expenseBanner.png')}
                className='w-72 h-72'/>
            </View>
            <View className='space-x-2 mx-2'>
                <Text 
                    className ={`${colors.heading} text-lg font-bold`}>For What?</Text>
                <TextInput
                    value={title}
                    onChangeText={value => setTitle(value)} 
                    className='p-4 bg-white rounded-full mb-3'/>
                <Text 
                    className ={`${colors.heading} text-lg font-bold`}>How Much?</Text>
                <TextInput
                    value={amount}
                    onChangeText={value => setAmount(value)} 
                    className='p-4 bg-white rounded-full mb-3'/>
            </View>
            <View className='mx-2 space-x-2'>
              <Text className='text-lg font-bold'>Category</Text>
              <View className='flex-row flex-wrap items-center '>
                {
                  categories.map(cat=>{
                    let bgColor = 'bg-white';
                    if(cat.value == category) bgColor='bg-green-200' //this code makes the category bg to be green when clicked
                    return (
                      <TouchableOpacity onPress={()=> setCategory(cat.value)} key={cat.value} className={`rounded-full ${bgColor} px-4 p-3 mb-2 mr-2`}>
                        <Text>{cat.title}</Text>
                      </TouchableOpacity>
                    )
                  })
                }
              </View>
            </View>
        </View>
        <View>
        {
                loading? (
                    <Loading />
                ):(
                    <TouchableOpacity
                        onPress={handleAddExpence}
                        style={{backgroundColor: colors.button}}
                        className='my-6 rounded-full p-3 shadow-sm mx-2'>
                        <Text className='text-white text-lg text-center font-bold'>Add Expense</Text>
                    </TouchableOpacity>
                  )
        }
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}