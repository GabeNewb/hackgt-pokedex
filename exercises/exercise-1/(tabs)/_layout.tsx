import { PokeballIcon } from '@/components/Shared/PokeballIcon';
import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (focused ? <PokeballIcon /> : null),
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
      }}>
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#000',
    height: 80,
  },
  tabBarLabel: {
    color: '#fff',
    fontSize: 18,
  },
});
