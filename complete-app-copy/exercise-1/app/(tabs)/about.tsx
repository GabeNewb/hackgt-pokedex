import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hello HackGT!</Text>
      <Link style={styles.text} href="https://github.com/GabeNewb/hackgt-pokedex#">
        Repo
      </Link>
      <Link style={styles.text} href="https://github.com/GabeNewb/hackgt-pokedex/exercise-0">
        Exercise 0
      </Link>
      <Link style={styles.text} href="https://github.com/GabeNewb/hackgt-pokedex/exercise-1">
        Exercise 1
      </Link>
      <Link style={styles.text} href="https://github.com/GabeNewb/hackgt-pokedex/exercise-2">
        Exercise 2
      </Link>
      <Link style={styles.text} href="https://github.com/GabeNewb/hackgt-pokedex/exercise-3">
        Exercise 3
      </Link>
      <Link style={styles.text} href="https://github.com/GabeNewb/hackgt-pokedex/exercise-4">
        Exercise 4
      </Link>
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
