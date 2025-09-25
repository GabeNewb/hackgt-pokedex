import { useGetEvolutionChainQuery } from "@/hooks/useGetEvolutionChainQuery";
import { useGetPokemonQuery } from "@/hooks/useGetPokemonQuery";
import { Link } from "expo-router";
import type { Pokemon } from "pokenode-ts";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";

interface PokemonEvolutionChainProps {
  pokemon: Pokemon;
}

interface EvolutionStageProps {
  pokemonName: string;
  level?: number;
}

const EvolutionStage = ({ pokemonName, level }: EvolutionStageProps) => {
  const { data: pokemon, isLoading } = useGetPokemonQuery(pokemonName);

  if (isLoading) {
    return (
      <View style={styles.stageContainer}>
        <ActivityIndicator size="small" color="#0000ff" />
      </View>
    );
  }

  if (!pokemon) return null;

  return (
    <View style={styles.stageContainer}>
      <Link href={`/pokemon?name=${pokemon.name}`} asChild>
        <View>
          <Image
            source={{ uri: pokemon.sprites.front_default || "" }}
            style={styles.pokemonSprite}
          />
          <Text style={styles.pokemonName}>{pokemon.name}</Text>
          {level && <Text style={styles.levelText}>Lv. {level}</Text>}
        </View>
      </Link>
    </View>
  );
};

export const PokemonEvolutionChain = ({ pokemon }: PokemonEvolutionChainProps) => {
  const { data: evolutionChain, isLoading } = useGetEvolutionChainQuery(pokemon);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (!evolutionChain?.chain) return null;

  const chain = evolutionChain.chain;
  const firstEvolution = chain.evolves_to[0];
  const secondEvolution = firstEvolution?.evolves_to[0];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Evolution Chain</Text>
      <View style={styles.chainContainer}>
        {/* Base Form */}
        <EvolutionStage pokemonName={chain.species.name} />

        {firstEvolution && (
          <>
            <View style={styles.arrowContainer}>
              <Text style={styles.arrow}>→</Text>
              <Text style={styles.evolutionLevel}>
                {firstEvolution.evolution_details[0]?.min_level
                  ? `Lv. ${firstEvolution.evolution_details[0].min_level}`
                  : firstEvolution.evolution_details[0]?.trigger.name}
              </Text>
            </View>
            <EvolutionStage
              pokemonName={firstEvolution.species.name}
              level={firstEvolution.evolution_details[0]?.min_level}
            />
          </>
        )}

        {secondEvolution && (
          <>
            <View style={styles.arrowContainer}>
              <Text style={styles.arrow}>→</Text>
              <Text style={styles.evolutionLevel}>
                {secondEvolution.evolution_details[0]?.min_level
                  ? `Lv. ${secondEvolution.evolution_details[0].min_level}`
                  : secondEvolution.evolution_details[0]?.trigger.name}
              </Text>
            </View>
            <EvolutionStage
              pokemonName={secondEvolution.species.name}
              level={secondEvolution.evolution_details[0]?.min_level}
            />
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  loadingContainer: {
    padding: 20,
    alignItems: "center",
  },
  chainContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 10,
  },
  stageContainer: {
    alignItems: "center",
    minWidth: 80,
  },
  pokemonSprite: {
    width: 80,
    height: 80,
  },
  pokemonName: {
    textAlign: "center",
    textTransform: "capitalize",
    fontSize: 14,
    marginTop: 5,
  },
  levelText: {
    textAlign: "center",
    fontSize: 12,
    color: "#666",
  },
  arrowContainer: {
    alignItems: "center",
  },
  arrow: {
    fontSize: 24,
    color: "#666",
  },
  evolutionLevel: {
    fontSize: 12,
    color: "#666",
    textTransform: "capitalize",
  },
});
