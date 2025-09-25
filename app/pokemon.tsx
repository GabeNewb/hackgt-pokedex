import { PokemonAbilities } from '@/components/PokemonDetailComponents/PokemonAbilities';
import { PokemonMoves } from '@/components/PokemonDetailComponents/PokemonMoves';
import { PokemonPhysicalCharacteristics } from '@/components/PokemonDetailComponents/PokemonPhysicalCharacteristics';
import { PokemonStats } from '@/components/PokemonDetailComponents/PokemonStats';
import { PokemonTypes } from '@/components/PokemonDetailComponents/PokemonTypes';
import { PokemonEvolutionChain } from '@/components/PokemonEvolutionChain';
import { useGetPokemonQuery } from '@/hooks/useGetPokemonQuery';
import { getPokemonTypeColor } from '@/utils/getPokemonTypeColor';
import { LinearGradient } from 'expo-linear-gradient';
import { Link, router, useLocalSearchParams } from 'expo-router';
import { ActivityIndicator, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PokemonScreen() {
  const { name } = useLocalSearchParams();
  const { data: pokemon, isLoading, error } = useGetPokemonQuery(name as string);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error || !pokemon) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Failed to load Pokemon data</Text>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backButtonText}>Go Back</Text>
        </Pressable>
      </View>
    );
  }

  const primaryColor = getPokemonTypeColor(pokemon.types[0]?.type.name);
  const secondaryColor = pokemon.types[1]
    ? getPokemonTypeColor(pokemon.types[1].type.name)
    : primaryColor;

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[primaryColor, secondaryColor]}
        end={{ x: 0, y: 1 }}
        start={{ x: 0, y: 0 }}
        style={styles.gradientBackground}
      />

      <ScrollView style={styles.scrollView} bounces={false}>
        {/* Header with back button */}
        <View style={styles.header}>
          <Link href="/(tabs)" style={styles.backButton}>
            <Text style={styles.backButtonText}>← Back</Text>
          </Link>
        </View>

        {/* Pokemon Image and Basic Info */}
        <View style={styles.topSection}>
          <Image
            source={{ uri: pokemon.sprites.other?.['official-artwork'].front_default || pokemon.sprites.front_default || '' }}
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
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    marginBottom: 20,
  },
  gradientBackground: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
    opacity: 0.3,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  backButton: {
    padding: 10,
  },
  backButtonText: {
    fontSize: 18,
    fontWeight: '600',
  },
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
