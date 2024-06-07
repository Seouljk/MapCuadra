import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ScrollView, Image, Alert } from 'react-native';
import { Searchbar } from 'react-native-paper';
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from '@react-navigation/native';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation();

  const handleSettings = () => {
    navigation.navigate('Settings');
  };

  const handleButtonPress = (value) => {
    console.log(`Button pressed: ${value}`);
  };

  const handleLogout = () => {
    Alert.alert(
      "Logout Confirmation",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Logout",
          onPress: () => {
            navigation.navigate("Login");
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.searchBarContainer}>
          <Searchbar
            placeholder="Search"
            onChangeText={setSearchQuery}
            value={searchQuery}
            style={styles.searchBar}
          />
          {/*<TouchableOpacity
            style={styles.buttonSetting}
            onPress={handleSettings}
          >
            <Image
              source={require('../logo/settings.png')}
              style={{
                width: 20,
                height: 20,
              }}
            />
            </TouchableOpacity>*/}
        </View>

        <View style={styles.horizontalScrollView}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleButtonPress('MyHome')}
            >
              <Text style={styles.buttonText}>My Home</Text>
            </TouchableOpacity>
            {/* Other buttons */}
          </ScrollView>
        </View>
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.action}>
          <TouchableOpacity
            style={styles.buttonMain}
            onPress={() => handleButtonPress('SettingDistance')}
          >
            <Image
              source={require('../../logo/ExigentFinale2.png')}
              style={{
                width: 50,
                height: 50,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={handleLogout}
      >
        <Icon name="sign-out" size={20} color="#fff" style={{ marginRight: 10 }} />
        <Text style={{ color: "#fff", fontSize: 16 }}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dbdbdb',
  },
  contentContainer: {
    flex: 1,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
    marginHorizontal: 10,
    elevation: 3,
  },
  searchBar: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  buttonSetting: {
    height: 55,
    width: 55,
    borderRadius: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    elevation: 3,
  },
  horizontalScrollView: {
    position: 'absolute',
    top: 80,
    flexDirection: 'row',
    paddingHorizontal: 0,
    paddingHorizontal: 0,
  },
  button: {
    height: 40,
    width: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 3,
    backgroundColor: '#3a88ed',
  },
  buttonText: {
    color: 'white',
  },
  cardContainer: {
    backgroundColor: 'white',
    height: 60,
    width: '90%',
    borderRadius: 20,
    marginBottom: 20,
    alignSelf: 'center',
    elevation: 3,
  },
  buttonMain:{
    backgroundColor: '#3a88ed',
    borderRadius: 50,
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  action: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 20,
  },
  logoutButton: {
    bottom: 10,
    backgroundColor: "maroon",
    borderRadius: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export default App;
