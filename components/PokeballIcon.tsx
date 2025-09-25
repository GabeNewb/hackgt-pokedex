import { Image } from 'react-native';
import pokeball from './pokeball.png';

export const PokeballIcon = () => {

  return (
    <Image
      source={pokeball}
      style={{ width: 24, height: 24 }}
    />
  );
}
