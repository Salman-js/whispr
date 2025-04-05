import { Redirect, Stack } from 'expo-router';
import { useUser } from '@clerk/clerk-expo';

export default function RootLayout() {
  const { isSignedIn } = useUser();
  if (!isSignedIn) {
    return <Redirect href='/(auth)' />;
  }
  return (
    <Stack>
      <Stack.Screen name='index' options={{ headerShown: false }} />
    </Stack>
  );
}
