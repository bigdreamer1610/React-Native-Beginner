import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, SafeAreaView, TouchableHighlight, ScrollView, Switch, FlatList, TouchableOpacity } from 'react-native';

const Wallet = (props) => {
    return (
        <View style={styles.wrapper}>
            <TouchableOpacity style={styles.clickableView} onPress={() =>
                props.navigation.navigate('Profile', { keyword: 'Johny' })}>
                <View style={styles.centerView}>
                    <Text style={styles.innerText}>Go to the next screen Wallet</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 100,
        borderWidth: 2,
        borderRadius: 10,
        padding: 15,
        borderStyle: 'dashed',
        borderColor: '#2F9054'
    },
    buttonStyle: {
        fontSize: 50
    },
    clickableView: {
        backgroundColor: '#bb8082',
        height: 50
    },
    centerView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    innerText: {
        color: 'white',
        fontSize: 25
    }
});

export default Wallet;