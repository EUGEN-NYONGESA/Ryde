﻿import { Redirect } from 'expo-router';
import React from 'react'
import { View, Text } from 'react-native';

const Home = () => {
  return (
    <Redirect href="/(auth)/welcome" />
  )
}

export default Home;