import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function PerformancePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Title</Text>
      <Text style={styles.text}>Type</Text>
      <Text style={styles.text}>Address</Text>
      <Text style={styles.text}>Links</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbe9e2',
    alignItems: 'center',
    margin:10,
    borderRadius: 15,
    //justifyContent: 'center',
  },
  text: {
    margin: 30,
    //borderWidth:1,
    padding:10,
    color:'#566573',
    fontSize:35,
  }
});
