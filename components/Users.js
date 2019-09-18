import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  Picker,
} from 'react-native';
import {TopBar} from './TopBar';
import {fetchData, postData} from '../functions/dataFunctions';

const renderUsers = (users, {navigation}, address) => {
  if (users && users.data && address) {
    return users.data.map(user => {
      if (user.address == address) {
        return (
          <TouchableOpacity
            key={user.id}
            style={styles.userCard}
            onPress={() => navigation.navigate('Location')}>
            <Image style={styles.userAvatar} source={{uri: user.avatar}} />

            <View style={styles.infoBlock}>
              <View style={styles.userName}>
                <Text>{user.name}</Text>
              </View>

              <View style={styles.spacer}></View>

              <View>
                <Text style={styles.userTitle}>{user.job_title}</Text>
              </View>
            </View>

            <View style={styles.userAddressBlock}>
              <Text style={styles.userAddress}>{user.address}</Text>
            </View>
          </TouchableOpacity>
        );
      }
    });
  }
};

const renderAdresses = users => {
  if (users && users.data) {
    return users.data.map(user => {
      return (
        <Picker.Item
          key={user.address}
          label={`${user.address}`}
          value={user.address}
        />
      );
    });
  }
};

export const Users = ({navigation}) => {
  const [users, setUsers] = useState(0);
  const [address, setAddress] = useState(0);

  useEffect(() => {
    fetchData().then(data => setUsers(data));
  }, []);

  return (
    <View styles={styles.container}>
      <TopBar navigation={navigation} />

      <Text style={styles.header}>Users</Text>

      <View style={styles.pickerBlock}>
        <Text>Address: </Text>
        <Picker
          selectedValue={address}
          style={styles.pickerStyle}
          onValueChange={(itemValue, itemIndex) => {
            setAddress(itemValue);
          }}>
          {renderAdresses(users)}
        </Picker>
      </View>

      <ScrollView contentContainerStyle={styles.usersList}>
        {renderUsers(users, {navigation}, address)}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  header: {
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 30,
  },
  pickerBlock: {
    marginLeft: 20,

    flexDirection: 'row',
    alignItems: 'center',
  },
  pickerStyle: {
    marginLeft: 20,

    height: 50,
    width: 100,
  },
  usersList: {
    // height: 800,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 13,
    paddingBottom: 13,
  },
  userCard: {
    flexDirection: 'row',
    marginBottom: 13,
    alignItems: 'center',

    height: 90,
    backgroundColor: '#FFF',
    borderRadius: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  infoBlock: {
    flexDirection: 'column',
    marginLeft: 20,
  },
  userAvatar: {
    marginLeft: 20,

    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#000',
  },
  userTitle: {
    color: 'grey',
  },
  userAddressBlock: {
    position: 'absolute',
    right: 16,
    top: 16,
  },
  userAddress: {
    fontSize: 16,
  },
  spacer: {
    marginTop: 5,
    marginBottom: 5,
  },
});
