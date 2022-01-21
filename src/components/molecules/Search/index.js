import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {IconBack, IconFilter, IconSearch} from '../../../assets';
import {Gap} from '../../atom';

const Search = ({onPress}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <TouchableOpacity onPress={onPress}>
        <IconBack />
      </TouchableOpacity>
      <View style={styles.wrapper}>
        <IconSearch />
        <Gap width={10} />
        <TextInput
          placeholder="Cari nama gunung"
          style={{paddingRight: 10, width: '85%'}}
        />
        <IconFilter />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  wrapper: {
    height: 50,
    width: '100%',
    borderRadius: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginLeft: 24,
  },
});
