import React from 'react';
import {View, StyleSheet} from 'react-native';
import { TopBar } from './TopBar';

export const Location = ({navigation}) => {
  return (
    <View styles={styles.container}>
      <TopBar navigation={navigation} />
    </View>
  );
};

Location.navigationOptions = () => {
  return {title: 'Location'};
};

const styles = StyleSheet.create({
  container: {},
});
