import { PokemonListItem } from "@/components/Pokedex/PokemonListItem";
import { useGetAllPokemonQuery } from "@/hooks/useGetAllPokemonQuery";
import { FlatList, StyleSheet, View } from "react-native";

export const PokemonList = () => {
  const { data } = useGetAllPokemonQuery();

  return (
    <View style={styles.container}>
      <FlatList
        data={data?.results}
        contentContainerStyle={styles.listContent}
        keyExtractor={(pokemon) => pokemon.name}
        numColumns={2}
        renderItem={({ item }) => (
          <PokemonListItem name={item.name} />
        )}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    paddingTop: 50,
    justifyContent: "center",
    backgroundColor: "#000",
    alignItems: "center",
  },
  list: {
    flex: 1,
    width: "100%",
  },
  listContent: {
    width: "100%",
    gap: 16,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
});
