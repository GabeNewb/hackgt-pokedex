import { StyleSheet, Text, View } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hello HackGT!</Text>
      <Text style={styles.text}>Repo</Text>
      <Text style={styles.text}>Exercise 1</Text>
      <Text style={styles.text}>Exercise 2</Text>
      <Text style={styles.text}>Exercise 3</Text>
      <Text style={styles.text}>Exercise 4</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  text: {
    color: '#fff',
    fontSize: 24,
  },
});
