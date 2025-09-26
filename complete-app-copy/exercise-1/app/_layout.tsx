import { queryClient } from '@/react-query/client';
import { QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" options={{ title: 'Pokédex' }} />
        <Stack.Screen name="about" options={{ title: 'About' }} />
      </Stack>
    </QueryClientProvider>
  );
}
