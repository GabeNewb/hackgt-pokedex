import { useQuery } from "@tanstack/react-query";
import type { Pokemon } from "pokenode-ts";

interface EvolutionChainResponse {
  chain: {
    species: {
      name: string;
      url: string;
    };
    evolves_to: {
      species: {
        name: string;
        url: string;
      };
      evolution_details: {
        min_level: number;
        trigger: {
          name: string;
        };
      }[];
      evolves_to: {
        species: {
          name: string;
          url: string;
        };
        evolution_details: {
          min_level: number;
          trigger: {
            name: string;
          };
        }[];
      }[];
    }[];
  };
}

interface PokemonSpeciesResponse {
  evolution_chain: {
    url: string;
  };
}

export const useGetEvolutionChainQuery = (pokemon: Pokemon | undefined) => {
  // First, fetch the Pokemon species data which contains the evolution chain URL
  const speciesQuery = useQuery<PokemonSpeciesResponse>({
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
  });

  // Then, fetch the evolution chain data using the URL from species data
  return useQuery<EvolutionChainResponse>({
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
  });
};
