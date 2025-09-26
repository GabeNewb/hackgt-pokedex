import { StyleSheet, Text, View } from 'react-native';

// The main page of the Pokedex. A PokemonList component could go here.
export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Open up exercises/exercise-1/README.md to start working on your app!
      </Text>
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
  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 24,
  },
});
