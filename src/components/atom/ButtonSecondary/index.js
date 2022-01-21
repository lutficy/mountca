import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ButtonSecondary = ({label, onPress, disable, primary}) => {
  return (
    <TouchableOpacity
      disabled={disable}
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.wrapperbutton(primary)}>
      <Text style={styles.label(primary)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default ButtonSecondary;

const styles = StyleSheet.create({
  wrapperbutton: primary => ({
    height: 60,
    width: '100%',
    backgroundColor: primary === 'secondary' ? '#DFDFF6' : '#F8F8F8',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }),
  label: primary => ({
    fontSize: 16,
    fontWeight: '600',
    color: primary === 'secondary' ? '#5352ED' : '#A4B0BE'
  }),
});
