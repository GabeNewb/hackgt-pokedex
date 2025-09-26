import { useQuery } from "@tanstack/react-query";
import type { EvolutionChain, Pokemon, PokemonSpecies } from "pokenode-ts";

export const useGetEvolutionChainQuery = (pokemon: Pokemon | undefined) => {
  // First, fetch the Pokemon species data which contains the evolution chain URL
  const speciesQuery = useQuery<PokemonSpecies>({
    queryKey: ["pokemon-species", pokemon?.name],
    queryFn: async () => {
      if (!pokemon?.species.url) throw new Error("No species URL available");
      const response = await fetch(pokemon.species.url);
      if (!response.ok) {
        throw new Error(`Failed to fetch Pokemon species: ${pokemon.name}`);
      }
      return response.json();
    },
    enabled: Boolean(pokemon?.species.url),
    staleTime: Infinity,
  });

  // Then, fetch the evolution chain data using the URL from species data
  return useQuery<EvolutionChain>({
    queryKey: ["evolution-chain", pokemon?.name],
    queryFn: async () => {
      if (!speciesQuery.data?.evolution_chain.url) {
        throw new Error("No evolution chain URL available");
      }
      const response = await fetch(speciesQuery.data.evolution_chain.url);
      if (!response.ok) {
        throw new Error(`Failed to fetch evolution chain for: ${pokemon?.name}`);
      }
      return response.json();
    },
    enabled: Boolean(speciesQuery.data?.evolution_chain.url),
    staleTime: Infinity,
  });
};
