import type { Pokemon } from 'pokenode-ts';
import { StyleSheet, Text, View } from 'react-native';

interface PokemonPhysicalCharacteristicsProps {
  pokemon: Pokemon;
}

export const PokemonPhysicalCharacteristics = ({ pokemon }: PokemonPhysicalCharacteristicsProps) => {

  return (
    <View style={styles.characteristicsContainer}>
      <View style={styles.characteristicBox}>
        <Text style={styles.characteristicLabel}>Height</Text>
        <Text style={styles.characteristicValue}>{(pokemon.height / 10).toFixed(1)}m</Text>
      </View>
      <View style={styles.characteristicBox}>
        <Text style={styles.characteristicLabel}>Weight</Text>
        <Text style={styles.characteristicValue}>{(pokemon.weight / 10).toFixed(1)}kg</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  characteristicsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  characteristicBox: {
    alignItems: 'center',
  },
  characteristicLabel: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  characteristicValue: {
    fontSize: 20,
    fontWeight: '600',
  },
});
