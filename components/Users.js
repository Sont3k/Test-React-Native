import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {TopBar} from './TopBar';
import {fetchUsers} from '../functions/dataFunctions';

const renderUsers = (users, {navigation}, address = 1) => {
  if (users && users.data && address) {
    return users.data.map(user => {
      if (user.address == address) {
        return (
          <TouchableOpacity
            key={user.id}
            style={styles.userCard}
            onPress={() => navigation.navigate('Location')}>
            <View style={styles.infoBlock}>
              <View style={styles.userName}>
                <Text>{user.name}</Text>
              </View>

              <View style={styles.spacer}></View>

              <View>
                <Text style={styles.userTitle}>{user.job_title}</Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      }
    });
  }
};

export const Users = ({navigation}) => {
  const [users, setUsers] = useState(0);

  useEffect(() => {
    fetchUsers().then(data => setUsers(data));
  }, []);

  return (
    <View>
      <TopBar navigation={navigation} />

      <Text style={styles.header}>Users</Text>

      <View style={styles.addressHeaderBlock}>
        <Text style={styles.addressHeader}>Address: </Text>

        <Text style={styles.userAddress}>
          {navigation.state.params.address}
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.usersList}>
        {renderUsers(users, {navigation}, navigation.state.params.addressID)}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 30,
  },
  usersList: {
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
  addressHeaderBlock: {
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 13,
  },
  addressHeader: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  userAddress: {
    fontSize: 16,
  },
  spacer: {
    marginTop: 5,
    marginBottom: 5,
  },
});
