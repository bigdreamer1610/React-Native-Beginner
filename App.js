import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, SafeAreaView } from 'react-native';

const Cat = () => {
  return (
    <View styles={styles.stacks}>
      <Text style={styles.catStyle}><Text>Hello this is a test string</Text>
        <Text> This should be appended</Text></Text>

    </View>

  );
}
// messing up with text
const SecondCat = () => {
  const [titleText, setTitleText] = useState('hello');
  const bodyText = useState("This is not really a test string but i dont know hefhiusfhhghghgfgurhfrufuhbfhgfhjhfgfh");

  const onPressTitle = () => {
    setTitleText("this has just been pressed");
  }
  return (
    <View style={styles.wrapper}>
      <Text style={styles.baseText} onPress={onPressTitle}> {titleText}
      </Text>
      <Text numberOfLines={3}>{bodyText}</Text>
    </View>
  );
};

//messing up with image

const DisplayImages = () => {
  return (
    <View style={styles.imageWrapper}>
      <Text>say hello</Text>
      <Image style={styles.logoStyle} source={require('./assets/medium.png')}></Image>
      <Image style={styles.logoStyle} source={{ uri: 'data:image/jpeg;base64,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' }}></Image>
    </View>
  );
}

const DisplayTextInputAndButton = () => {
  const [username, onChangeUsername] = useState('ddd');
  const [password, onChangePassword] = useState('Enter your pass')

  const onFocus = () => {
    this.setState({ backgroundColor: '#585858' })
  }

  return (
    <View style={styles.imageWrapper}>
      <View>
        <Text style={styles.headerLabel}>Login</Text>
      </View>
      <View>
        <Text style={styles.titleLabels}>Username</Text>
        <TextInput style={styles.inputStyle} placeholder="username" value={username} onFocus={onFocus}></TextInput>
      </View>
      <View>
        <Text style={styles.titleLabels}>Password</Text>
        <TextInput style={styles.inputStyle}></TextInput>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    margin: 100,
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    borderStyle: 'dashed',
    borderColor: '#2F9054'
  },
  baseText: {
    color: '#2F909F',
    fontSize: 15,
    fontWeight: 'bold'
  },
  imageWrapper: {
    borderWidth: 1,
    borderColor: '#2F9054',
    justifyContent: 'center',
    margin: 50,
    marginTop: 150
  },
  logoStyle: {
    width: 100,
    height: 100,
    marginLeft: 10,
    resizeMode: 'cover'
  },
  headerLabel: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    // fontFamily: 'ari'
  },
  inputStyle: {
    margin: 10,
    marginLeft: 5,
    marginRight: 5,
    borderWidth: 1,
    height: 30,
    padding: 5
  },
  titleLabels: {
    color: '#2093DC',
    fontWeight: 'bold',
  }
});

export default DisplayTextInputAndButton;