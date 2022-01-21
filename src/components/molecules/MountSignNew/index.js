import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {IconMount} from '../../../assets';

const MountSignNew = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', paddingHorizontal: 15}}>
        <View style={styles.wrappericon}>
          <IconMount />
        </View>
        <View style={{paddingLeft: 10, alignSelf: 'center'}}>
          <Text style={styles.title}>Gunung Semeru</Text>
          <Text style={styles.subtitle}>via Ranu Pane</Text>
        </View>
      </View>
      <View style={styles.wrapperdetail}>
        <Text style={styles.detail}>Detail</Text>
      </View>
    </View>
  );
};

export default MountSignNew;
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: HEIGHT * 0.1,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  wrappericon: {
    width: WIDTH * 0.1,
    height: HEIGHT * 0.06,
    borderRadius: 40 / 2,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E5EBFC',
  },
  title: {
    fontSize: 12,
    fontFamily: 'Inter-SemiBold',
    color: 'black',
  },
  subtitle: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#A4B0BE',
  },
  wrapperdetail: {
    //   width: WIDTH * 0.1,
    //   height: HEIGHT * 0.0,
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#5352ED',
    marginHorizontal: 15,
  },
  detail: {
    color: '#5352ED',
  },
});
