import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function PokemonScreen() {
  const { name } = useLocalSearchParams();

  console.log(name);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Pokemon Screen</Text>
      <Text style={styles.text}>Pokemon Name: {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  text: {
    color: '#fff',
    fontSize: 24,
  },
});
