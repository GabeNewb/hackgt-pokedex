import { queryClient } from "@/react-query/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { App } from "./App";

export default function Index() {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
}
