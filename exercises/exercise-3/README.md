# Exercise 2: Make A Pokemon Details Modal!

We've made a simple Pokédex. Let's create something to do on the page.

## Step 1 - Implement a Modal in **PokeModal.tsx** and place the **PokeModal** in the `PokemonListItem` component

React Native provides a Modal component that presents content above the rest of your app
[Modal Documentation](https://reactnative.dev/docs/modal). We will use this to display more information about a Pokémon on top of the other information in this page. Let's build it step by step.

1. In the `PokemonListItem` component, declare a local state boolean that will control the visibility of the `PokeModal`. `const [isModalVisible, setIsModalVisible] = useState(false);`

2. Convert the top level `View` in the `PokemonListItem` to a `Pressable` - essentially, React Native's button counterpart. Add an onPress property that sets the visibility of the Modal to true.

3. Add the `PokeModal` component to the `PokemonListItem`. It should accept the following properties: isVisible, onClose, and pokemon. The onClose should set the visibility of the Modal to false.

4. In the `PokeModal`, import the `Modal` component from `react-native`. Implement it and choose an animationType for your modal and set `transparent={true}`. Pass the properties of `visible={isVisible}` and `onRequestClose={onClose}` to

5. Add `PokeModalContent` as a child to your `PokeModal`.

Congratulations! You should now have a Modal that pops up in front of the stack to show a larger view of a Pokémon.

## Step 2 - Add more details to the Modal!

Co-located with this README, there is a folder named `PokemonDetailComponents`. These are pre-made components that you should be able to implement into your `PokeModalContent` component. I've left a comment where they should go! The Pokemon type from PokéAPI is quite extensive. If you'd like to add some details that I haven't included here, feel free!

[PokéAPI documentation](https://pokeapi.co/docs/v2#pokemon)
