# Exercise 1: Routing

One of the first steps to Expo development is setting up your routing. We will be using Expo's built in ["file-based routing"](https://docs.expo.dev/develop/file-based-routing/) to add screens to our [Stack](https://docs.expo.dev/router/advanced/stack/).

A Stack is much like it sounds - a "stack" of screens that controls the view. By default, an Index route is shown. When you navigate in a React Native app, the new route "stacks" in front of the index route.

We will have two screens at the end of this step - an "Index" screen, which you already have, and an "About" screen that provides some helpful links. We will take advantage of Expo's built-in Tabs component to navigate between these two.

## Step 1 - Create the Tabs directory

First, create a special **(tabs)** directory under **app**, or copy the (tabs) directory from this directory. Expo will read this special folder and give us some quality of life shortcuts to implementing tabs.

## Step 2 - Use Tabs within your Stack

Point your <Stack /> to your new **(tabs)** directory.

In **app/_layout.tsx**, add a <Stack.Screen name="(tabs)" /> component within the opening and closing tag of <Stack />. This component has a `name` prop of `(tabs)`, so it will have special behavior and use the `(tabs)` directory for its routing by default.

## Step 3 - Add your home screen

If you chose to build your **(tabs)** directory from scratch, create a **app/(tabs)/_layout.tsx** file. Here, you will import the <Tabs /> component from `react-native` and use it in a component. These routing files need a component exported by default, so make sure to use the keywords `export default`.

For more information visit the [Tabs documentation](https://docs.expo.dev/router/advanced/tabs/).

Next, we'll add a home screen to the Tabs by adding it as a child of the <Tabs /> component. In **app/(tabs)/_layout.tsx**, add a <Tabs.Screen name='index' options={{ title: 'Pokédex' }} /> component within the opening and closing tag of <Tabs />. This component has a name of `index`, so it will route to the file within **app/(tabs)** named **app/(tabs)/index.tsx**

Sidenote:
By default, the Expo Stack and its screens show a built in Header component. I am going to hide this with the Stack's [options](https://docs.expo.dev/router/advanced/stack/#screen-options-and-header-configuration). Add a `title` through its options as well.

## Step 4 - add a Screen & Tab item

Add an About Screen to the [Tabs](https://docs.expo.dev/router/advanced/tabs/). I have already made this screen - its file is colocated in this Folder.

In **app/(tabs)/_layout.tsx**, add the following component - <Tabs.Screen name='about' />. Move the **about.tsx** file to its proper place - and if I've done my job well enough here, you should know where that is.

You should now have basic routing to and from the About page!
