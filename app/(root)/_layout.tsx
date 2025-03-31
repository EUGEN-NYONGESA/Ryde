import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Layout = () => {
    return (
        <SafeAreaProvider>
            <StatusBar style="auto" translucent backgroundColor="transparent" />
            <Stack
                screenOptions={{
                contentStyle: {
                backgroundColor: '#ffffff',
                flex: 1
                }
                }}
            >
                    <Stack.Screen
                        name="(tabs)"
                        options={{ headerShown: false }} />
                    </Stack>
            </SafeAreaProvider>
    );
};

export default Layout;
