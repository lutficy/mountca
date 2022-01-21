import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

const BookingSign = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={{fontSize: 12, fontFamily: 'Inter-Regular'}}>
        Yeay, Kamu sudah bisa{' '}
      </Text>
      <View>
        <Text
          style={{
            fontSize: 13,
            fontFamily: 'Inter-bold',
            borderBottomWidth: 1,
            borderColor: 'grey',
          }}>
          booking sekarang
        </Text>
      </View>
    </View>
  );
};

export default BookingSign;
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        width: '70%',
        height: HEIGHT * 0.06,
        backgroundColor: '#54CD61',
        padding: 11,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    }
});
