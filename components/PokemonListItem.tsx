import { useGetPokemonQuery } from "@/hooks/useGetPokemonQuery";
import { getPokemonTypeColor } from "@/utils/getPokemonTypeColor";
import { LinearGradient } from 'expo-linear-gradient';
import { Image, Pressable, Text } from "react-native";

export const PokemonListItem = ({name}: {name: string}) => {
  const { data } = useGetPokemonQuery(name);

  const primaryColor = getPokemonTypeColor(data?.types[0]?.type.name);
  const secondaryColor = data?.types[1] ? getPokemonTypeColor(data?.types[1].type.name) : primaryColor;

  return (
    <Pressable
      style={{
        borderRadius: 10,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#000",
        flex: 1,
        gap: 10,
        marginHorizontal: 8,
        height: 350,
        width: 250,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LinearGradient
        colors={[primaryColor, secondaryColor]}
        end={{ x: 0, y: 1 }}
        pointerEvents="none"
        start={{ x: 0, y: 0 }}
        style={{
          borderRadius: 10,
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: "100%"
        }}
      />
      <Image source={data?.sprites.front_default ? { uri: data.sprites.front_default } : undefined} style={{ width: 200, height: 200 }} />
      <Text style={{ fontWeight: "bold", textTransform: "capitalize", fontSize: 20 }}>{name}</Text>
    </Pressable>
  );
}
