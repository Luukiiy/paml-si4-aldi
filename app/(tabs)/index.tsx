import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MyApp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Halo Ayam</Text>
      <Text style={styles.text}>Fakultas Sains dan Teknologi</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fcfc03',
  },  
  text: {
    fontSize: 30,
    color: '#0000'
  }
});

export default MyApp;