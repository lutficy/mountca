import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import { DummyMount1, DummyMount2, DummyMount3 } from '../../assets';
import {Button, MountCard, ButtonJoin} from '../../components';
import Search from '../../components/molecules/Search';

const ChooseMount = ({onPress}) => {
  return (
    <ScrollView contentContainerStyle={styles.page} showsVerticalScrollIndicator={false}>
      <Search />
      <View style={{paddingTop: 34}}>
        <Text style={{fontSize: 12, color: '#5352ED'}}>
          14{' '}
          <Text style={{color: '#A4B0BE'}}>
            Gunung di{' '}
            <Text style={{color: '#A4B0BE', fontWeight: '800'}}>Jawa</Text>
          </Text>
        </Text>
      </View>
      <View style={{marginRight: -50, paddingTop: 20}}>
        <MountCard pic={DummyMount1} namemountain="Gunung Semeru" numb="3 Pendaki" />
        <MountCard pic={DummyMount2} namemountain="Gunung Prau" numb="6 Pendaki"/>
        <MountCard pic={DummyMount3} namemountain="Gunung Lawu" numb="5 Pendaki"/>
      </View>
    </ScrollView>
  );
};

export default ChooseMount;

const styles = StyleSheet.create({
  page: {
    paddingRight: 50,
    marginHorizontal: 24,
    paddingTop: 20,
  },
});
