import { getPokemonTypeColor } from '@/utils/getPokemonTypeColor';
import type { Pokemon } from 'pokenode-ts';
import { StyleSheet, Text, View } from 'react-native';

interface PokemonTypesProps {
  pokemon: Pokemon;
}

export const PokemonTypes = ({ pokemon }: PokemonTypesProps) => {
  return (
    <View style={styles.typesContainer}>
      {pokemon.types.map((type) => (
        <View
          key={type.type.name}
          style={[
            styles.typeTag,
            { backgroundColor: getPokemonTypeColor(type.type.name) }
          ]}
        >
          <Text style={styles.typeText}>{type.type.name}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  typesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 20,
  },
  typeTag: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 15,
  },
  typeText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
