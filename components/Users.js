import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {TopBar} from './TopBar';
import {fetchData, postData} from '../functions/dataFunctions';
import {ScrollView} from 'react-native-gesture-handler';

const renderUsers = (users, {navigation}) => {
  console.log(users);
  if (users && users.data) {
    return users.data.map(user => {
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

            <View style={styles.userTitle}>
              <Text>{user.job_title}</Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    });
  }
};

export const Users = ({navigation}) => {
  const [users, setUsers] = useState(0);

  useEffect(() => {
    fetchData().then(data => setUsers(data));
  }, []);

  return (
    <View styles={styles.container}>
      <TopBar navigation={navigation} />

      <Text style={styles.header}>Users</Text>

      <ScrollView contentContainerStyle={styles.usersList}>
        {users ? renderUsers(users, {navigation}) : null}
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
  spacer: {
    marginTop: 5,
    marginBottom: 5,
  },
});
