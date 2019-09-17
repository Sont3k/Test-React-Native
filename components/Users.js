import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {TopBar} from './TopBar';

export const Users = ({navigation}) => {
  return (
    <View styles={styles.container}>
      <TopBar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({});
