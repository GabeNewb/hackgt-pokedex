import { getPokemonTypeColor } from '@/utils/getPokemonTypeColor';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import type { Pokemon } from 'pokenode-ts';
import { Image, Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

interface PokemonDetailsModalProps {
  isVisible: boolean;
  onClose: () => void;
  pokemon: Pokemon | undefined;
}

export const PokemonDetailsModal = ({ isVisible, onClose, pokemon }: PokemonDetailsModalProps) => {
  if (!pokemon) return null;

  const primaryColor = getPokemonTypeColor(pokemon.types[0]?.type.name);
  const secondaryColor = pokemon.types[1] 
    ? getPokemonTypeColor(pokemon.types[1].type.name) 
    : primaryColor;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <LinearGradient
            colors={[primaryColor, secondaryColor]}
            end={{ x: 0, y: 1 }}
            start={{ x: 0, y: 0 }}
            style={styles.gradientBackground}
          />

          <ScrollView style={styles.scrollView}>
            {/* Pokemon Image and Name */}
            <Image
              source={{ uri: pokemon.sprites.front_default || '' }}
              style={styles.pokemonImage}
            />
            <Text style={styles.pokemonName}>
              {pokemon.name}
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

            {/* Stats */}
            <View style={styles.statsContainer}>
              <Text style={styles.sectionTitle}>Base Stats</Text>
              {pokemon.stats.map((stat) => (
                <View key={stat.stat.name} style={styles.statRow}>
                  <Text style={styles.statName}>
                    {stat.stat.name.replace('-', ' ')}:
                  </Text>
                  <View style={styles.statBarContainer}>
                    <View
                      style={[
                        styles.statBar,
                        { width: `${(stat.base_stat / 255) * 100}%` }
                      ]}
                    />
                    <Text style={styles.statValue}>{stat.base_stat}</Text>
                  </View>
                </View>
              ))}
            </View>

            {/* Additional Info */}
            <View style={styles.infoContainer}>
              <Text style={styles.sectionTitle}>Details</Text>
              <Text style={styles.infoText}>Height: {pokemon.height / 10}m</Text>
              <Text style={styles.infoText}>Weight: {pokemon.weight / 10}kg</Text>
            </View>

            <Link
              href={{
                pathname: "/pokemon",
                params: { name: pokemon.name }
              }}
              onPress={() => {
                onClose();
              }}
            >
              <Text style={styles.closeButtonText}>View more Info</Text>
            </Link>

          </ScrollView>

          <Pressable
            style={styles.closeButton}
            onPress={onClose}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '90%',
    height: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
    padding: 20,
  },
  pokemonImage: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  pokemonName: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    textTransform: 'capitalize',
  },
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
  statsContainer: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  statRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  statName: {
    textTransform: 'uppercase',
    width: '40%',
    fontSize: 14,
    fontWeight: '500',
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
    backgroundColor: '#4CAF50',
    borderRadius: 10,
  },
  statValue: {
    position: 'absolute',
    right: 8,
    color: '#000',
    fontWeight: 'bold',
  },
  infoContainer: {
    marginVertical: 20,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 5,
  },
  closeButton: {
    position: 'absolute',
    right: 20,
    top: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 20,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  moreInfoButton: {
    marginVertical: 20,
    alignSelf: 'center',
    width: '80%',
    overflow: 'hidden',
    borderRadius: 25,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  moreInfoGradient: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  moreInfoText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});
