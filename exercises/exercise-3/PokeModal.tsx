import type { Pokemon } from 'pokenode-ts';
import { View } from 'react-native';

interface PokeModalProps {
  pokemon: Pokemon | undefined;
}

export const PokeModal = ({ pokemon }: PokeModalProps) => {
  if (!pokemon) return null;

  return <View />;
};
