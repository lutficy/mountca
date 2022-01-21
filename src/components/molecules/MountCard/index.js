import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {DummyMount1, IconInfo} from '../../../assets';

const MountCard = ({onPress, pic, namemountain, numb}) => {
  return (
    <View style={styles.wrapper}>
      <View style={{flexDirection: 'row'}}>
        <Image source={pic} style={{width: 70, height: 70}} />
        <View style={{width: 240, paddingLeft: 10, width: '80%'}}>
          <View style={{alignItems: 'flex-end', width: '100%'}}>
            <IconInfo />
          </View>
          <Text style={{fontSize: 16, fontWeight: '700', color: 'black'}}>
            {namemountain}
          </Text>
          <Text style={{fontSize: 12, fontWeight: '700', color: '#5352ED'}}>
            {numb}
            <Text style={{color: '#A4B0BE', fontSize: 10}}>/tim</Text>
          </Text>
        </View>
      </View>
      <View style={{paddingTop: 10}}>
        <Text style={{color: '#A4B0BE', fontSize: 10, fontWeight: '400'}}>
          Durasi
        </Text>
        <Text style={{color: 'black', fontSize: 10, fontWeight: '400'}}>
          2 hari 1 malam
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          marginRight: '60.7%',
          marginTop: 125,
        }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onPress}
          style={{
            height: 60,
            width: '100%',
            backgroundColor: '#E5E5E5',
            borderBottomLeftRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 16, fontWeight: '600', color: '#5352ED'}}>
            Buat Tim
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onPress}
          style={{
            height: 60,
            width: '100%',
            backgroundColor: '#5352ED',
            borderBottomRightRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 16, fontWeight: '600', color: 'white'}}>
            Buat Tim
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MountCard;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    height: 184,
    borderRadius: 15,
    padding: 15,
    marginBottom: 30,
  },
});
