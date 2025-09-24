import { NUMBERS, PATHS } from "@/constants";
import { useQuery } from "@tanstack/react-query";
import type { NamedAPIResourceList } from "pokenode-ts";

export const useGetAllPokemonQuery = () => {
  return useQuery<NamedAPIResourceList>({
    queryKey: ["pokemon", "all"],
    queryFn: async () => {
      const response = await fetch(`${PATHS.GET_ALL_POKEMON}?limit=${NUMBERS.KANTO_MAX}`);
      if (!response.ok) {
        throw new Error("Failed to fetch Pokemon");
      }
      return response.json();
    },
    staleTime: Infinity,
  });
};