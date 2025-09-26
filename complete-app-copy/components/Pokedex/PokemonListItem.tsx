import { useGetPokemonQuery } from '@/hooks/useGetPokemonQuery';
import { getPokemonTypeColor } from '@/utils/getPokemonTypeColor';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text } from 'react-native';
import { PokeModal } from '../PokeModal/PokeModal';

interface PokemonListItemProps {
  name: string;
}

export const PokemonListItem = ({ name }: PokemonListItemProps) => {
  const { data } = useGetPokemonQuery(name);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const primaryColor = getPokemonTypeColor(data?.types[0]?.type.name);
  const secondaryColor = data?.types[1]
    ? getPokemonTypeColor(data?.types[1].type.name)
    : primaryColor;

  return (
    <>
      <Pressable onPress={() => setIsModalVisible(true)} style={styles.card}>
        <LinearGradient
          colors={[primaryColor, secondaryColor]}
          end={{ x: 0, y: 1 }}
          start={{ x: 0, y: 0 }}
          style={styles.gradient}
        />
        <Image
          source={data?.sprites.front_default ? { uri: data.sprites.front_default } : undefined}
          style={styles.pokemonImage}
        />
        <Text style={styles.pokemonName}>{name}</Text>
      </Pressable>

      <PokeModal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        pokemon={data}
      />
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#000',
    flex: 1,
    gap: 10,
    marginHorizontal: 8,
    height: 350,
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    borderRadius: 10,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
    pointerEvents: 'none',
  },
  pokemonImage: {
    width: 200,
    height: 200,
  },
  pokemonName: {
    fontWeight: 'bold',
    textTransform: 'capitalize',
    fontSize: 20,
  },
});
