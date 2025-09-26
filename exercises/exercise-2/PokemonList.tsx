import { StyleSheet, View } from 'react-native';

export const PokemonList = () => {
  return (
    <View style={styles.container}>
      {/* TODO: Add a FlatList here that displays the PokemonList */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    paddingTop: 50,
    justifyContent: 'center',
    backgroundColor: '#000',
    alignItems: 'center',
  },
  list: {
    flex: 1,
    width: '100%',
  },
  listContent: {
    width: '100%',
    gap: 16,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
});
