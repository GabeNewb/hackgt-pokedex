import { PATHS } from "@/constants/PATHS";
import { useQuery } from "@tanstack/react-query";
import type { Pokemon } from "pokenode-ts";

export const useGetPokemonQuery = (name: string) => {
  return useQuery<Pokemon>({
    queryKey: ["pokemon", name],
    queryFn: async () => {
      const response = await fetch(PATHS.GET_POKEMON(name));
      if (!response.ok) {
        throw new Error(`Failed to fetch Pokemon: ${name}`);
      }
      return response.json();
    },
    staleTime: Infinity,
    enabled: Boolean(name),
  });
};