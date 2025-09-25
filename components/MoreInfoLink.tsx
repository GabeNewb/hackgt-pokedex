import { getPokemonTypeColor } from '@/utils/getPokemonTypeColor';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import type { Pokemon } from 'pokenode-ts';
import { StyleSheet, Text } from 'react-native';

interface MoreInfoLinkProps {
  onPress: () => void;
  pokemon: Pokemon;
}

export const MoreInfoLink = ({ onPress, pokemon }: MoreInfoLinkProps) => {
  const primaryColor = getPokemonTypeColor(pokemon.types[0]?.type.name);
  const secondaryColor = pokemon.types[1]
    ? getPokemonTypeColor(pokemon.types[1].type.name)
    : primaryColor;

  return (
    <Link
        href={{
          pathname: "/pokemon",
          params: { name: pokemon.name }
        }}
        style={styles.moreInfoButton}
        onPress={onPress}
    >
        <LinearGradient
          colors={[primaryColor, secondaryColor]}
          end={{ x: 1, y: 0 }}
          start={{ x: 0, y: 0 }}
          style={styles.moreInfoGradient}
        >
        <Text style={styles.moreInfoText}>More Info</Text>
        </LinearGradient>
    </Link>
  );
};

const styles = StyleSheet.create({
  moreInfoButton: {
    marginVertical: 24,
    alignSelf: 'center',
    width: '90%',
    overflow: 'hidden',
    borderRadius: 25,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
  moreInfoGradient: {
    width: '100%',
    paddingVertical: 18,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  moreInfoText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
});
