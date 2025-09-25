import { PokemonAbilities } from '@/components/Shared/PokemonDetailComponents/PokemonAbilities';
import { PokemonEvolutionChain } from '@/components/Shared/PokemonDetailComponents/PokemonEvolutionChain';
import { PokemonMoves } from '@/components/Shared/PokemonDetailComponents/PokemonMoves';
import { PokemonPhysicalCharacteristics } from '@/components/Shared/PokemonDetailComponents/PokemonPhysicalCharacteristics';
import { PokemonStats } from '@/components/Shared/PokemonDetailComponents/PokemonStats';
import { PokemonTypes } from '@/components/Shared/PokemonDetailComponents/PokemonTypes';
import { Pokemon } from 'pokenode-ts';
import { Image, StyleSheet, Text, View } from 'react-native';

interface PokemonDetailsProps {
  pokemon: Pokemon;
}

export const PokemonDetails = ({ pokemon }:  PokemonDetailsProps ) => {
  return (
    <View>
      {/* Pokemon Image and Basic Info */}
      <View style={styles.topSection}>
        <Image
          source={{
            uri:
              pokemon.sprites.other?.['official-artwork'].front_default ||
              pokemon.sprites.front_default ||
              '',
          }}
          style={styles.pokemonImage}
        />
        <Text style={styles.pokemonName}>
          {pokemon.name} #{pokemon.id.toString().padStart(3, '0')}
        </Text>

        {/* Types */}
        <PokemonTypes pokemon={pokemon} />
      </View>

      {/* Physical Characteristics */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Physical Characteristics</Text>
        <PokemonPhysicalCharacteristics pokemon={pokemon} />
      </View>

      {/* Abilities */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Abilities</Text>
        <PokemonAbilities pokemon={pokemon} />
      </View>

      {/* Stats */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Base Stats</Text>
        <PokemonStats pokemon={pokemon} />
      </View>

      {/* Evolution Chain */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Evolution Chain</Text>
        <PokemonEvolutionChain pokemon={pokemon} />
      </View>

      {/* Moves */}
      <View style={[styles.section, styles.lastSection]}>
        <Text style={styles.sectionTitle}>Moves</Text>
        <PokemonMoves pokemon={pokemon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topSection: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  pokemonImage: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  pokemonName: {
    fontSize: 32,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    marginBottom: 10,
  },
  section: {
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  lastSection: {
    marginBottom: 40,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});
