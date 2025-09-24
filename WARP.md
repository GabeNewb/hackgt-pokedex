# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a React Native/Expo application built as a Pokédex, fetching data from the PokéAPI. The project uses TypeScript, file-based routing with expo-router, and React Query for data management.

## Common Development Commands

### Essential Commands
```bash
# Install dependencies
npm install

# Start development server
npx expo start

# Platform-specific development
npx expo start --ios      # iOS simulator
npx expo start --android  # Android emulator
npx expo start --web      # Web browser

# Code quality
npm run lint              # Run ESLint
```

### Development Workflow
```bash
# Reset project structure (removes starter code)
npm run reset-project

# Clear Metro bundler cache (if needed)
npx expo start --clear
```

## Architecture and Code Structure

### Data Layer Architecture
- **React Query Setup**: Global query client configured in `react-query/client.ts` with 24-hour cache time
- **Data Fetching Hooks**: Custom hooks in `hooks/` directory encapsulate API calls
  - `useGetAllPokemonQuery`: Fetches list of Pokémon (limited to Kanto region - 151)
  - `useGetPokemonQuery`: Individual Pokémon details (currently empty/placeholder)
- **API Integration**: Uses PokéAPI v2 (`https://pokeapi.co/api/v2/`) with proper TypeScript interfaces

### Project Structure Patterns
- **Constants Organization**: Centralized in `constants/` with re-exports via index file
  - `NUMBERS.ts`: Numeric constants (e.g., KANTO_MAX: 151)
  - `PATHS.ts`: API endpoint URLs with parameterized functions
- **File-Based Routing**: Uses expo-router with `app/` directory structure
  - `_layout.tsx`: Root layout configuration (currently minimal Stack)
  - `index.tsx`: Home screen displaying Pokémon list
- **TypeScript Configuration**: Strict mode enabled with path aliases (`@/*` maps to root)

### Key Dependencies
- **UI/Navigation**: React Navigation with bottom tabs, expo-router for file-based routing
- **Data Fetching**: @tanstack/react-query v5.90.2 for server state management  
- **Type Safety**: pokeapi-types for PokéAPI TypeScript definitions
- **Development**: expo-lint for code quality, React Compiler experimental features enabled

### Data Flow Pattern
1. React Query hooks make API calls to PokéAPI endpoints
2. Constants define API URLs and limits (currently focused on Kanto region)
3. TypeScript interfaces ensure type safety for API responses
4. Components consume data through custom hooks with loading/error states

### Configuration Notes
- **Expo Configuration**: Uses new architecture and React Compiler experiments
- **Build Targets**: iOS, Android, and Web with static web output
- **TypeScript**: Strict mode with path mapping for clean imports
- **ESLint**: Uses expo-config with ignores for dist folder

When working on this codebase, focus on the clean separation between data fetching (hooks), constants, and UI components. The React Query pattern should be extended for new API endpoints following the existing hook structure.
