import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';

export const TopBar = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.toggleDrawer();
        }}>
        <Image
          source={{
            uri:
              'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png',
          }}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    justifyContent: 'center',
  },
  image: {
    width: 25,
    height: 25,
    marginLeft: 15,
  },
});
