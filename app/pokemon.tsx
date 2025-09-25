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
        </View>

        {/* Physical Characteristics */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Physical Characteristics</Text>
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
        </View>

        {/* Abilities */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Abilities</Text>
          <View style={styles.abilitiesContainer}>
            {pokemon.abilities.map((ability) => (
              <View key={ability.ability.name} style={styles.abilityItem}>
                <Text style={styles.abilityName}>
                  {ability.ability.name.replace('-', ' ')}
                  {ability.is_hidden && ' (Hidden)'}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Stats */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Base Stats</Text>
          {pokemon.stats.map((stat) => (
            <View key={stat.stat.name} style={styles.statRow}>
              <Text style={styles.statName}>
                {stat.stat.name.replace('-', ' ')}
              </Text>
              <View style={styles.statBarContainer}>
                <View
                  style={[
                    styles.statBar,
                    { 
                      width: `${(stat.base_stat / 255) * 100}%`,
                      backgroundColor: primaryColor
                    }
                  ]}
                />
                <Text style={styles.statValue}>{stat.base_stat}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Moves */}
        <View style={[styles.section, styles.lastSection]}>
          <Text style={styles.sectionTitle}>Moves</Text>
          <View style={styles.movesContainer}>
            {pokemon.moves.slice(0, 8).map((move) => (
              <View key={move.move.name} style={styles.moveItem}>
                <Text style={styles.moveName}>
                  {move.move.name.replace('-', ' ')}
                </Text>
              </View>
            ))}
          </View>
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
  typesContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  typeTag: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  typeText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'uppercase',
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
  statRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  statName: {
    width: '35%',
    fontSize: 14,
    textTransform: 'capitalize',
    color: '#666',
  },
  statBarContainer: {
    flex: 1,
    height: 20,
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
  },
  statBar: {
    height: '100%',
    borderRadius: 10,
  },
  statValue: {
    position: 'absolute',
    right: 8,
    color: '#000',
    fontWeight: 'bold',
  },
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
