import { View, Text, SafeAreaView } from 'react-native'
import { colors } from '../theme'
import BackButton from '../components/backButton'

export default function AddTripScreen() {
  return (
    <SafeAreaView>
      <View className='flex justify-between h-full'>
        <View>
            <BackButton/>
            <Text className={`${colors.heading} font-bold text-xl text-center `}>Add Trip</Text>
        </View>
        <View>

        </View>
      </View>
    </SafeAreaView>
  )
}