import { getPokemonTypeColor } from '@/utils/getPokemonTypeColor';
import { LinearGradient } from 'expo-linear-gradient';
import type { Pokemon } from 'pokenode-ts';
import { Image, Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { PokemonPhysicalCharacteristics } from '../Shared/PokemonDetailComponents/PokemonPhysicalCharacteristics';
import { PokemonStats } from '../Shared/PokemonDetailComponents/PokemonStats';
import { PokemonTypes } from '../Shared/PokemonDetailComponents/PokemonTypes';
import { MoreInfoLink } from './MoreInfoLink';

interface PokeModalProps {
  isVisible: boolean;
  onClose: () => void;
  pokemon: Pokemon | undefined;
}

export const PokeModal = ({ isVisible, onClose, pokemon }: PokeModalProps) => {
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
            <PokemonTypes pokemon={pokemon} />

            {/* Stats */}
            <PokemonStats pokemon={pokemon} />

            {/* Additional Info */}
            <PokemonPhysicalCharacteristics pokemon={pokemon} />
          </ScrollView>

          <MoreInfoLink onPress={onClose} pokemon={pokemon} />
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
});
