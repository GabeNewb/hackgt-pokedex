# Exercise 0: Running the Project & Styling

This is heavily inspired by Expo’s Getting Started Docs.

(If you have any questions I can’t get to, you’ll probably find answers there.)

## What You’ll Need:

[Expo Go](https://expo.dev/go) installed on a physical device

[Node.js (LTS Version)](https://nodejs.org/en) installed

[VS Code](https://code.visualstudio.com/) or any other preferred code editor or IDE installed

A macOS, Linux, or Windows (PowerShell and WSL2) with a terminal window open

## Get Started!

1. In your terminal, run - `git clone https://github.com/GabeNewb/hackgt-pokedex.git`

2. Navigate to your directory - `cd hackgt-pokedex`

3. Install NPM Packages - `npm install`

4. Run the Pokédex - `npx expo start`

5. Open your app with the QR code!

## First Steps

Let's dip our toes into the water. Open **app/index.tsx** to look at the code behind our main screen.

React Native, unlike the web, uses Javascript to style components. It is generally good practice to define a colocated `StyleSheet` within the component to keep your components readable. ["Styling in React Native"](https://reactnative.dev/docs/style)

Let's start out simple - change the background & text color of your **index.tsx** page. Personally, I'm a fan of dark themes, so I set these values to `backgroundColor: '#000'` and `color: '#fff'`.

## Following Along

For the next hour, feel free to run with this on your own time. I will be slowly making my way through this exercise and answering questions, but if I'm going too slowly for you, feel free to skip to the next exercise!

Timebox: 10 minutes