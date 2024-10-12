import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useEffect} from 'react';
import normalize from 'react-native-normalize';
import {logo} from '../assets';
import {StackActions} from '@react-navigation/native';

export default function Splash({navigation}: any) {
  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(StackActions.replace('Home'));
    }, 2000);
  });
  return (
    <View style={styles.centering}>
      <Image source={logo} width={normalize(150)} height={normalize(150)} />
      <Text style={styles.title}>TOKOTITOH</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  centering: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'green',
  },
  title: {
    fontSize: normalize(30),
    color: 'white',
    fontWeight: 'bold',
    marginTop: normalize(20),
  },
});
