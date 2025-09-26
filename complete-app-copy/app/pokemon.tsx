import { useGetPokemonQuery } from '@/hooks/useGetPokemonQuery';
import { getPokemonTypeColor } from '@/utils/getPokemonTypeColor';
import { LinearGradient } from 'expo-linear-gradient';
import { Link, router, useLocalSearchParams } from 'expo-router';
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PokemonDetails } from '../components/PokemonDetails/PokemonDetails';

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
        <View style={styles.header}>
          <Link href="/(tabs)" style={styles.backButton}>
            <Text style={styles.backButtonText}>← Back</Text>
          </Link>
        </View>

        <PokemonDetails pokemon={pokemon} />
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
});
