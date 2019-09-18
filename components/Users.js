import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {TopBar} from './TopBar';
import {fetchUsers} from '../functions/dataFunctions';

const renderUsers = (users, {navigation}, addressID) => {
  if (users && users.data && addressID) {
    return users.data.map(user => {
      if (user.address == addressID) {
        return (
          <View key={user.id} style={styles.userCard}>
            <View style={styles.infoBlock}>
              <View style={styles.userName}>
                <Text>{user.name}</Text>
              </View>

              <View style={styles.spacer}></View>

              <View>
                <Text style={styles.userTitle}>{user.job_title}</Text>
              </View>
            </View>
          </View>
        );
      }
    });
  } else {
    return null;
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
        <Text style={styles.addressHeader}>Address:</Text>

        <Text style={styles.userAddress}>
          {navigation.getParam('address', 'Choose city in \"Locations\"')}
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.usersList}>
        {renderUsers(users, {navigation}, navigation.getParam('addressID', 0))}
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
    borderWidth: 0.2,
    borderColor: '#000',
  },
  infoBlock: {
    flexDirection: 'column',
    marginLeft: 20,
  },
  userTitle: {
    color: 'grey',
  },
  addressHeaderBlock: {
    flexDirection: 'row',
    alignItems: 'center',

    marginLeft: 20,
    marginTop: 13,
  },
  addressHeader: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  userAddress: {
    marginLeft: 13,
    fontSize: 15,
  },
  spacer: {
    marginTop: 5,
    marginBottom: 5,
  },
});
