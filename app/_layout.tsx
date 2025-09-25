import { queryClient } from "@/react-query/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";

/*
export default function RootLayout() {
  return (
    <Stack initialRouteName="index" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: "Pokedex" }} />
    </Stack>
  );
}
*/


/*
Uncomment for Exercise 2

export default function RootLayout() {
  return (
    <Stack initialRouteName="index" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: "Pokedex" }} />
      <Stack.Screen name="about" options={{ title: "About" }} />
    </Stack>
  );
}
*/

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="pokemon/[name]"
          options={{ headerShown: false }}
        />
      </Stack>
    </QueryClientProvider>
  );
}

