import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {IconMount} from '../../../assets';

const MountSign = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center', borderRadius: 20}}>
        <View style={styles.wrappericon}>
          <IconMount />
        </View>
        <View>
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

export default MountSign;
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  wrappericon: {
    width: WIDTH * 0.1,
    height: HEIGHT * 0.06,
    borderRadius: 20,
    backgroundColor: '#E5EBFC',
    // opacity: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  container: {
    width: '100%',
    height: 65,
    borderWidth: 0.1,
    borderRadius: 4,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 17
    
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
    borderColor: '#5352ED'
  },
  detail: {
      color: '#5352ED'
  }
});
