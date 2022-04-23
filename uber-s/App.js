import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//set up redux

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Buda lamba</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
