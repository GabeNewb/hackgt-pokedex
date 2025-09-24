import { PokemonListItem } from "@/components/PokemonListItem";
import { useGetAllPokemonQuery } from "@/hooks/useGetAllPokemonQuery";
import { FlatList, View } from "react-native";

export const App = () => {
  const { data } = useGetAllPokemonQuery();

  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        height: "100%",
        paddingTop: 50,
        justifyContent: "center",
        backgroundColor: "#000",
        alignItems: "center",
      }}
    >
    <FlatList
        data={data?.results}
        contentContainerStyle={
            {width: "100%",
                gap: 16,
                paddingHorizontal: 16,
                paddingVertical: 24
            }
          }
        keyExtractor={(pokemon) => pokemon.name}
        numColumns={2}
        renderItem={({ item }) => (
          <PokemonListItem name={item.name} />
        )}
        style={{ flex: 1, width: "100%" }}
      />

    </View>
  );
}
