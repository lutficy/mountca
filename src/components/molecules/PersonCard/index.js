import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyProfile1} from '../../../assets';

const PersonCard = ({onBack, image, name, city}) => {
  return (
    <View style={styles.wrapper}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.wrapperimage}>
          <Image source={image} style={styles.image} />
        </View>
        <View style={{paddingLeft: 10}}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.city}>{city}</Text>
        </View>
      </View>
      {onBack && (
        <Text style={{fontSize: 14, color: '#5352ED', fontWeight: '600'}}>
          Siap!
        </Text>
      )}
    </View>
  );
};

export default PersonCard;

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 10,
    justifyContent: 'space-between',
    width: '100%',
    height: 70,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  wrapperimage: {
    borderWidth: 1,
    borderRadius: 25,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'rgba(83, 82, 237, 0.75)',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
    color: 'black',
  },
  city: {
    fontWeight: '400',
    fontSize: 12,
  },
});
