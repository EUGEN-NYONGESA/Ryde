﻿import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo'
import { Link } from 'expo-router'
import { SafeAreaView, Text, View } from 'react-native'
//import { SignOutButton } from '@/app/components/SignOutButton'

export default function Home() {
  const { user } = useUser()

  return (
    <SafeAreaView>
      <SignedIn>
        <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
      </SignedIn>
      <SignedOut>
        <Link href="/(auth)/sign-in">
          <Text>Sign In</Text>
        </Link>
        <Link href="/(auth)/sign-up">
          <Text>Sign Up</Text>
        </Link>
      </SignedOut>
    </SafeAreaView>
  );
};