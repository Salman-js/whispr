import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';
import { ClerkLoaded, ClerkProvider } from '@clerk/clerk-expo';
import '../global.css';
import { tokenCache } from '@/utils/cache';
import { Slot } from 'expo-router';
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const publicKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;
  return (
    <ClerkProvider publishableKey={publicKey} tokenCache={tokenCache}>
      <ClerkLoaded>
        <Slot />
      </ClerkLoaded>
    </ClerkProvider>
  );
}
