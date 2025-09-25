
/*
export default function RootLayout() {
  return (
    <Stack initialRouteName="index" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: "Pokedex" }} />
    </Stack>
  );
}
*/

import { Stack } from "expo-router";

/*
Uncomment for Exercise 2

export default function RootLayout() {
  return (
    <Stack initialRouteName="index" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: "Pokedex" }} />
      <Stack.Screen name="about" options={{ title: "About" }} />
    </Stack>
  );

 */

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="pokemon/[name]"
        options={{ headerShown: false }}
      />
    </Stack>
  );
}

