import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Button = ({label, onPress, disable, primary}) => {
  return (
    <TouchableOpacity
      disabled={disable}
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.wrapperbutton}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  wrapperbutton: {
    height: 60,
    width: '100%',
    backgroundColor: '#5352ED',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
});
