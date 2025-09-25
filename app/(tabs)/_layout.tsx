import { PokeballIcon } from '@/components/PokeballIcon';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarIcon: ({focused}) => focused ? <PokeballIcon /> : null,
        tabBarStyle: { backgroundColor: '#000', height: 60 },
        tabBarLabelStyle: { color: '#fff', fontSize: 18 }
      }}
    >
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="about" options={{ title: 'About' }} />
    </Tabs>
  );
}
