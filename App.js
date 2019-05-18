import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { createAppContainer, createMaterialTopTabNavigator, createDrawerNavigator } from "react-navigation";

class Home extends Component {

  static navigationOptions = {
      title: 'Home',
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={styles.text}>This is Home Screen Activity.</Text>
      </View>
    );
  }
}

class Settings extends Component {
  static navigationOptions = {
      title: 'Settings',
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={styles.text}>This is Settings Screen Activity.</Text>
      </View>
    );
  }
}

export const Tab_1 = createMaterialTopTabNavigator({
  Home: {
    screen: Home,
  },
  Settings: {
    screen: Settings,
  }
}, {
    tabBarPosition: 'top',
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: '#fff',
      pressColor: '#004D40',
      inactiveTintColor: '#fff',
      style: {
        backgroundColor: '#00B8D4'
      },
      labelStyle: {
        fontSize: 16,
        fontWeight: '200'
      }
    }

});

const MyDrawerNavigator = createDrawerNavigator({
  First: {
    screen: Tab_1,
    navigationOptions: ({ navigation }) => ({
      title: 'First Screen',
      headerStyle: {
        backgroundColor: '#00B8D4',
        elevation: 0, // remove shadow on Android
        shadowOpacity: 0, // remove shadow on iOS
      },
      headerTintColor: '#fff',
    })
  },
});

export default createAppContainer(MyDrawerNavigator);

const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f5fcff',
    padding: 11
  },
  text: {
    fontSize: 22,
    color: '#000',
    textAlign: 'center',
    marginBottom: 10
  },

});