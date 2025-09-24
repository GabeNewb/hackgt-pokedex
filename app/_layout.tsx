import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack initialRouteName="index" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="index" options={{ title: "Pokedex" }} />
    <Stack.Screen name="about" options={{ title: "About" }} />
  </Stack>;
}
