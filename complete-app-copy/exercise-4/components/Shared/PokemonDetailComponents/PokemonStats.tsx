import type { Pokemon } from 'pokenode-ts';
import { StyleSheet, Text, View } from 'react-native';

interface PokemonStatsProps {
  pokemon: Pokemon;
}

export const PokemonStats = ({ pokemon }: PokemonStatsProps) => {
  return (
    <View style={styles.statsContainer}>
      {pokemon.stats.map(stat => (
        <View key={stat.stat.name} style={styles.statRow}>
          <Text style={styles.statName}>{stat.stat.name.replace('-', ' ')}:</Text>
          <View style={styles.statBarContainer}>
            <View style={[styles.statBar, { width: `${(stat.base_stat / 255) * 100}%` }]} />
            <Text style={styles.statValue}>{stat.base_stat}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  statsContainer: {
    padding: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  statRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  statName: {
    textTransform: 'uppercase',
    width: '40%',
    fontSize: 14,
    fontWeight: '500',
  },
  statBarContainer: {
    flex: 1,
    height: 20,
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
  },
  statBar: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 10,
  },
  statValue: {
    position: 'absolute',
    right: 8,
    color: '#000',
    fontWeight: 'bold',
  },
});
