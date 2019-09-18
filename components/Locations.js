import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import {TopBar} from './TopBar';
import {fetchLocations} from '../functions/dataFunctions';

const renderLocations = (locations, {navigation}) => {
  if (locations && locations.data) {
    return locations.data.map(location => {
      return (
        <TouchableOpacity
          key={location.id}
          style={styles.locationCard}
          onPress={() =>
            navigation.navigate('Users', {
              addressID: location.id,
              address: `${location.city},\n${location.address}`,
            })
          }>
          <Text style={styles.locationID}>{location.id}</Text>

          <View style={styles.locationInfoBlock}>
            <Text style={styles.locationCity}>{location.city}</Text>
            <Text style={styles.locationAddress}>{location.address}</Text>
          </View>
        </TouchableOpacity>
      );
    });
  }
};

export const Locations = ({navigation}) => {
  const [locations, setLocations] = useState(0);

  useEffect(() => {
    fetchLocations().then(data => setLocations(data));
  }, []);

  return (
    <View style={styles.container}>
      <TopBar navigation={navigation} />

      <Text style={styles.header}>Locations</Text>

      <ScrollView contentContainerStyle={styles.list}>
        {renderLocations(locations, {navigation})}
      </ScrollView>
    </View>
  );
};

Locations.navigationOptions = () => {
  return {title: 'Locations'};
};

const styles = StyleSheet.create({
  header: {
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 30,
  },
  list: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 13,
    paddingBottom: 13,
  },
  locationCard: {
    flexDirection: 'row',
    marginBottom: 13,

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
  locationInfoBlock: {
    flexDirection: 'column',

    marginTop: 13,
    marginLeft: 13,
  },
  locationCity: {
    fontSize: 16,
  },
  locationAddress: {
    fontSize: 14,
    color: 'grey',
  },
  locationID: {
    position: 'absolute',
    right: 16,
    top: 16,

    fontSize: 20,
    fontWeight: 'bold',
  },
});
