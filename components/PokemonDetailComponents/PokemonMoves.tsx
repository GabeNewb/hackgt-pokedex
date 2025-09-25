import { Pokemon } from 'pokenode-ts';
import { StyleSheet, Text, View } from 'react-native';

export const PokemonMoves = ({ pokemon }: { pokemon: Pokemon }) => {
  return (
        <View style={styles.movesContainer}>
        {pokemon.moves.slice(0, 8).map((move) => (
            <View key={move.move.name} style={styles.moveItem}>
            <Text style={styles.moveName}>
                {move.move.name.replace('-', ' ')}
            </Text>
            </View>
        ))}
        </View>
  );
};

const styles = StyleSheet.create({
  movesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  moveItem: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 15,
  },
  moveName: {
    fontSize: 14,
    textTransform: 'capitalize',
  },
});
