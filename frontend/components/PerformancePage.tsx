import React from 'react';
import {Button, StyleSheet, Text, View, Image} from 'react-native';
import CustomButton from "./CustomButton";

import images from '../images/index';

export default function PerformancePage(data) {
  console.log("Data: ", data);
  return (
    <View style={styles.container}>
       <Image
        style={styles.stretch}
        source={images[data.data.image]}
      />
      <Text style={styles.text}>{data.data.title}</Text>
      <Text style={styles.other_text}>{data.data.type}</Text>
      <Text style={styles.other_text}>{data.data.links}</Text>
      <Button title="Donate" onPress={() => console.log('blabla')} />
    </View>
  );
}

/*<View style={styles.screenContainer}>
        <CustomButton
          size="sm"
          backgroundColor="#007bff"
          title="Donate"
          onPress={() => console.log('blabla')}
        />
      </View>*/

const styles = StyleSheet.create({
  stretch: {
    width: 395,
    height: 200,
    resizeMode: 'stretch',
  },
  container: {
    flex: 1,
    backgroundColor: '#fbe9e2',
    alignItems: 'center',
    margin: 10,
    borderRadius: 15,
  },
  other_text: {
    textShadowColor: 'red',
    margin: 10,
    padding: 10,
    color: 'black',
    fontSize: 25,
  },
  text: {
    textTransform: 'uppercase',
    margin: 10,
    padding: 10,
    color: 'black',
    fontSize: 35,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'red',
  },
});
