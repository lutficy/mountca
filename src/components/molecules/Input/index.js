import React, { useState } from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {IconHide} from '../../../assets';

const Input = ({title, type, onBack, secureTextEntry}) => {
const [border, setBorder] = useState('#A4B0BE')
const onFocusForm = () => {
    setBorder('#2F3542')
}
const onBlurForm = () => {
    setBorder('#A4B0BE')
}

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <View onFocus={onFocusForm} onBlur={onBlurForm} style={styles.wrapper(border)}>
        <TextInput secureTextEntry={secureTextEntry} placeholder={type} style={styles.textinput} />
        {onBack && <IconHide />}
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  wrapper: (border) => ({
    borderWidth: 1,
    borderRadius: 10,
    borderColor: border,
    marginTop: 5,
    height: 60,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  }),
  textinput: {
    width: 310,
    paddingHorizontal: 20,
    paddingVertical: 18,
  },
  title: {
    color: 'black',
    fontSize: 16,
  },
});
