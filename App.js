import 'react-native-gesture-handler'
import React, { Component, useEffect, useState } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './screens/Home';
import Profile from './screens/Profile'
import MyList from './screens/List'
import Wallet from './screens/Wallet';


const Tabbar = createBottomTabNavigator();

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Wallet" component={Wallet} options={{ headerShown: false }} />
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
}

const ProfileStack = createStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={Profile} />
      <ProfileStack.Screen name="MyList" component={MyList} options={{ headerShown: false }} />
    </ProfileStack.Navigator>
  );
};

const MyStack = () => {
  return (
    <NavigationContainer>
      <Tabbar.Navigator>
        <Tabbar.Screen name="Home" component={HomeStackScreen} options={{ headerShown: false }} />
        <Tabbar.Screen name="Profiles" component={ProfileStackScreen} />
      </Tabbar.Navigator>
    </NavigationContainer>
  );
};


export default MyStack;
