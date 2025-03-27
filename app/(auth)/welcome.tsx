import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import Swiper from 'react-native-swiper';
import { onboarding } from '@/constants';
import CustomButton from '@/components/customButton';

const Onboarding = () => {
    const swiperRef = useRef<Swiper>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const isLastSlide = activeIndex === onboarding.length - 1;

    const handleSkip = () => {
        router.replace("/(auth)/sign-up");
    };

    const handleNext = () => {
        if (activeIndex < onboarding.length - 1) {
            swiperRef.current?.scrollBy(1);
        } else {
            router.replace("/(auth)/sign-up");
        }
    };

    return (
        <SafeAreaView className='flex-1 bg-white'>
            <TouchableOpacity
                onPress={handleSkip}
                className='w-full flex justify-end items-end p-5'
            >
                <Text className='text-black text-md font-JakartaBold'>Skip</Text>
            </TouchableOpacity>

            <View className='flex-1'>
                {/* Swiper takes most space but leaves room for button */}
                <View className='flex-1'>
                    <Swiper
                        ref={swiperRef}
                        loop={false}
                        showsPagination={true}
                        dot={<View className='w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full' />}
                        activeDot={<View className='w-[32px] h-[4px] mx-1 bg-[#0286FF] rounded-full' />}
                        onIndexChanged={(index) => setActiveIndex(index)}
                    >
                        {onboarding.map((item) => (
                            <View key={item.id} className='flex items-center justify-center p-5'>
                                <Image
                                    source={item.image}
                                    className='w-full h-[300px]'
                                    resizeMode="contain"
                                />
                                <View className='flex flex-row items-center justify-center w-full m-10'>
                                    <Text className='text-black text-3xl font-JakartaBold mx-10 text-center'>
                                        {item.title}
                                    </Text>
                                </View>
                                <Text className='text-gray-400 text-lg font-JakartaSemiBold text-center mx-10 mt-3'>
                                    {item.description}
                                </Text>
                            </View>
                        ))}
                    </Swiper>
                </View>

                {/* Button positioned below swiper */}
                <View className='pb-10 px-5 text-white items-center'>
                    <CustomButton
                        title={isLastSlide ? "Get Started" : "Next"}
                        onPress={() =>
                            isLastSlide ? router.replace("/(auth)/sign-up")
                                :swiperRef.current?.scrollBy(1)
                        }
                        className='w-11/12 h-[45px] mt-10'
                />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Onboarding;