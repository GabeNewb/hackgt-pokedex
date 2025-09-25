import { PokemonList } from "@/components/PokemonList";
import { queryClient } from "@/react-query/client";
import { QueryClientProvider } from "@tanstack/react-query";

export default function Index() {
  return (
    <QueryClientProvider client={queryClient}>
      <PokemonList />
    </QueryClientProvider>
  );
}
