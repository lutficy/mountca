import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconGoogle} from '../../../assets';
import { Gap } from '../../atom';

const SignGoogle = () => {
  return (
    <View
      style={{
        height: 60,
        width: '100%',
        borderWidth: 1,
        borderColor: '#A4B0BE',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <IconGoogle />
      <Gap width={10} />
      <Text style={{fontSize: 16, fontWeight: '600', color: 'black'}}>Sign up with Google</Text>
    </View>
  );
};

export default SignGoogle;

const styles = StyleSheet.create({});
