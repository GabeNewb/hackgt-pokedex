# Exercise 2: Make Your Pokédex!

We're finally here! We have some basic routing in place, and it's time to start filling out our App.

## Step 1 - Add the PokemonList component to **app/(tabs)/index.tsx**.

I have pre-made a <PokemonList /> component colocated within this folder. Replace the Text of **app/(tabs)/index.tsx** with this component - optionally, move it to the **components** folder for better organization. I typically organize feature-specific components with the feature that it is used for, so an example location for this file would be **components/Pokedex/PokemonList.tsx**.

## Step 2 - Use the `useGetAllPokemonQuery` hook

I have included a premade hook within the **hooks** directory for ease of use. Before we slap it in the component and forget about it, let's take a look at what it does!

**useGetAllPokemonQuery.ts** is a wrapper for a `useQuery` usage from `@tanstack/react-query`. This is a common library that trivializes caching and RESTful requests. Since PokéAPI is a public facing API, they ask that each application that uses their API to cache data locally, so we're using this library to do so. That's right, we Gotta Cache Em All. You can see that I've set `staleTime` to `Infinity` since the data we're fetching is unlikely to change, and once we call it once we will not call it again, and will instead retrieve the data from the cache.

Use the `useGetAllPokemonQuery` hook inside the `PokemonList` to get an array of Pokémon which we can map through.

## Step 3 - Display Pokémon with a FlatList

[ScrollView](https://reactnative.dev/docs/scrollview) - unlike web development, a ScrollView is required in React Native in order to, well, scroll.

[FlatList](https://reactnative.dev/docs/flatlist) - a wrapper around a VirtualizedList and uses ScrollView props.

Essentially, FlatLists lazy load components so that if a component is far off of the screen, it will not render. This has a positive performance impact as it saves on large renders, but, since we'll be calling an endpoint to get colors and images of each item, it also saves us a request.

1. In `PokemonList`, Add the FlatList as a child of the top-level `View`.

2. Give it an array of items to map through to populate the list. For this, we will use `data.results` that we received from `useGetAllPokemonQuery`.

3. Add a keyExtractor function. This is used for caching and ordering. We can use the `pokemon.name` for now - though real ones would know that if we went far enough outside of Kanto, this would no longer work and we'd have to find another way.

4. Add some styling to the FlatList (I've pre-made it). `style={styles.list}` `contentContainerStyle={styles.listContent}`

5. Set numColumns to 2 (some styling changes might be necessary to make it look nice on your device - I did not style these responsively for this workshop)

6. Render a `PokemonListItem` via the FlatList's renderItem prop. (I've pre-made this for you. It's colocated in this folder). `PokemonListItem` accepts a `name` prop which it will use to fetch information about this Pokémon.

You should have a basic Pokédex now with virtualization and caching!
