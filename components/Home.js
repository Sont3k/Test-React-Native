import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export const Home = ({navigation}) => {
  return (
    <View styles={styles.container}>
      <Text>Fine</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});
