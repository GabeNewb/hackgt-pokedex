import { Pokemon } from 'pokenode-ts';
import { StyleSheet, Text, View } from 'react-native';

interface PokemonAbilitiesProps {
  pokemon: Pokemon;
}

export const PokemonAbilities = ({ pokemon }: PokemonAbilitiesProps) => {
  return (
    <View style={styles.abilitiesContainer}>
      {pokemon.abilities.map(ability => (
        <View key={ability.ability.name} style={styles.abilityItem}>
          <Text style={styles.abilityName}>
            {ability.ability.name.replace('-', ' ')}
            {ability.is_hidden && ' (Hidden)'}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  abilitiesContainer: {
    gap: 10,
  },
  abilityItem: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    padding: 12,
    borderRadius: 10,
  },
  abilityName: {
    fontSize: 16,
    textTransform: 'capitalize',
  },
});
