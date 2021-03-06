import React, { useState, useEffect } from 'react';
import { StyleSheet, Image } from 'react-native';
import { View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import MapView, { Marker, Callout } from 'react-native-maps';
import { MaterialIcons } from '@expo/vector-icons';

import api from '../services/api';
import { connect, disconnect, subscribeToNewDevs } from '../services/socket';

function Main({ navigation }) {

  const [ devs, setDevs ] = useState([]);
  const [ techs, setTechs ] = useState('');
  const [ currentRegion, setCurrentRegion ] = useState(null);
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  async function loadPosition() {
    const { granted } = await requestPermissionsAsync();

    if(granted) {
      const { coords } = await getCurrentPositionAsync({
        enableHighAccuracy: true
      });

      const { latitude, longitude } = coords;

      setCurrentRegion({
        latitude,
        longitude,
        latitudeDelta: 0.04,
        longitudeDelta: 0.04,
      });
    }
  }

  useEffect(() => {
    loadPosition();
  }, []);

  useEffect(() => {
    subscribeToNewDevs(dev => setDevs([ ...devs, dev ]));
  }, [devs]);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardWillShow', (e) => {
      setKeyboardHeight(e.endCoordinates.height);
    });

    const keyboardDidHideListener = Keyboard.addListener('keyboardWillHide', () => {
      setKeyboardHeight(0);
    });

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  function handleRegionChanged(region) {
    setCurrentRegion(region);
  }

  function setupWebsocket() {
    disconnect();

    const { latitude, longitude } = currentRegion;
    connect(latitude, longitude, techs);
  }

  async function loadDevs() {
    const { latitude, longitude } = currentRegion;

    const response = await api.get('/search', {
      params: {
        latitude,
        longitude,
        techs
      }
    });

    setDevs(response.data.devs);
    setupWebsocket();
  }

  if(!currentRegion) {
    return null;
  }

  return (
    <>
    <MapView
    region={ currentRegion }
    onRegionChangeComplete={ handleRegionChanged }
    initialRegion={ currentRegion }
    style={ styles.map }
    >
    { devs.map(dev => (
      <Marker
      key={dev._id}
      coordinate={{
        longitude: dev.location.coordinates[0],
        latitude: dev.location.coordinates[1],
      }}
      >
      <Image style={ styles.avatar } source={{ uri: dev.avatar_url }} />
      <Callout onPress={() => {
        navigation.navigate('Profile', { github_username: dev.github_username });
      }}>
      <View style={ styles.callout }>
      <Text style={ styles.devName }>{ dev.name }</Text>
      <Text style={ styles.devBio }>{ dev.bio }</Text>
      <Text style={ styles.devTechs }>{ dev.techs }</Text>
      </View>
      </Callout>
      </Marker>
      ))}
      </MapView>

      <TouchableOpacity onPress={ loadPosition } style={{ ...styles.loadButton, ...styles.centerButton }}>
      <MaterialIcons name="my-location" size={20} color="#FFF" />
      </TouchableOpacity>

      <View style={{ ...styles.searchForm, bottom: keyboardHeight + 20 }}>
      <TextInput
      style={ styles.searchInput }
      placeholder="Buscar devs por techs..."
      placeholderTextColor="#999"
      autoCapitalize="words"
      autoCorrect={false}
      value={ techs }
      onChangeText={ setTechs }
      />
      <TouchableOpacity onPress={ loadDevs } style={ styles.loadButton }>
      <MaterialIcons name="search" size={20} color="#FFF" />
      </TouchableOpacity>
      </View>
      </>
      );
    }

    const styles = StyleSheet.create({
      map: {
        flex: 1
      },
      avatar: {
        width: 54,
        height: 54,
        borderRadius: 4,
        borderWidth: 4,
        borderColor: '#FFF'
      },
      callout: {
        width: 260,
      },
      devName: {
        fontWeight: 'bold',
        fontSize: 16,
      },
      devBio: {
        color: '#666',
        marginTop: 5
      },
      devTechs: {
        marginTop: 5
      },
      centerButton: {
        position: 'absolute',
        top: 20,
        right: 20
      },
      searchForm: {
        position: 'absolute',
        left: 20,
        right: 20,
        zIndex: 5,
        flexDirection: 'row'
      },
      searchInput: {
        flex: 1,
        height: 50,
        backgroundColor: '#FFF',
        color: '#333',
        borderRadius: 25,
        paddingHorizontal: 20,
        fontSize: 16,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
          width: 4,
          height: 4
        },
        elevation: 2,
      },
      loadButton: {
        width: 50,
        height: 50,
        backgroundColor: '#8E4DFF',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
      },
    });

    export default Main;
