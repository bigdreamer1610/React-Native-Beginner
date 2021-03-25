import 'react-native-gesture-handler'
import { StackActions } from '@react-navigation/native'
import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, SafeAreaView, TouchableHighlight, ScrollView, Switch, FlatList, TouchableOpacity, Picker } from 'react-native';

const popAction = StackActions.pop(1);

const ViewWithText = ({ title }) => {
    return (
        <View style={styles.centerViewWrapper}>
            <Text style={styles.centerText}>{title}</Text>
        </View>
    );
};
const TouchableView = ({ title, action }) => {
    const onPressBack = () => {
        console.log('pop')
    }
    return (
        <TouchableOpacity style={styles.pressView} onPress={action} activeOpacity='0.8'>
            <ViewWithText title={title}></ViewWithText>
        </TouchableOpacity>
    )
}
const Profile = (propss) => {
    return (
        <View style={styles.wrapper}>
            <ViewWithText></ViewWithText>
            <ViewWithText title='Back to previous Screen'></ViewWithText>
            <TouchableView></TouchableView>
            <View style={styles.row}>
                <Text>Do you really want to log out?</Text>
                <TouchableOpacity onPress={() =>
                    props.navigation.navigate('MyList')}>
                    <Text style={styles.innerText}>Click here</Text>
                </TouchableOpacity>
            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    wrapper: {
        paddingTop: 50,
        backgroundColor: 'white',
        flex: 1
    },
    centerViewWrapper: {
        height: 80,
        backgroundColor: 'steelblue',
        justifyContent: 'center',
        marginBottom: 10,
    },
    centerText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 25
    },
    pressView: {
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    innerText: {
        marginLeft: 5,
        color: 'tomato'
    }
});

export default Profile;