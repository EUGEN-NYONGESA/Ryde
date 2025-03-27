import { View, Text, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import Swiper from 'react-native-swiper'
import { onboarding } from '@/constants'

const Onboarding = () => {
    const swiperRef = useRef<Swiper>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSkip = () => {
        router.replace("/(auth)/sign-up");
    }

    return (
        <SafeAreaView className='flex-1 bg-white'>
            <TouchableOpacity
                onPress={handleSkip}
                className='w-full flex justify-end items-end p-5'
            >
                <Text className='text-black text-md font-JakartaBold'>Skip</Text>
            </TouchableOpacity>

            <View className='flex-1'>
                <Swiper
                    ref={swiperRef}
                    loop={false}
                    showsPagination={true}
                    dot={<View className='w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full' />}
                    activeDot={<View className='w-[32px] h-[4px] mx-1 bg-[#0286FF] rounded-full' />}
                    onIndexChanged={(index) => setActiveIndex(index)}
                >
                    {onboarding.map((item, index) => (
                        <View key={`onboarding-${index}`} className='flex-1 items-center justify-center'>
                            <Text className='text-black text-xl font-JakartaBold'>{item.title}</Text>
                            <Text className='text-gray-500 text-center mt-4 px-8'>{item.description}</Text>
                        </View>
                    ))}
                </Swiper>
            </View>
        </SafeAreaView>
    )
}

export default Onboarding;