import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import { DummyProfile1, DummyProfile2, DummyProfile3, DummyProfile4, DummyProfile5 } from '../../assets';
import {
  BookingSign,
  Button,
  ButtonSecondary,
  Gap,
  MountSign,
  MountSignNew,
  PersonCard,
} from '../../components';

const KelolaTim = () => {
  return (
    <ScrollView>
      <View style={styles.page}>
        <View style={{marginBottom: 30}}>
          <MountSignNew />
          <View
            style={{
              borderBottomWidth: 1,
              borderStyle: 'dashed',
              borderColor: '#A4B0BE',
              marginTop: 30,
            }}
          />
        </View>
        <View style={{alignSelf: 'center', marginBottom: 20}}>
          <BookingSign />
        </View>
        <View style={{marginBottom: 30}}>
          <Text>Ketua</Text>
          <View style={{paddingTop: 15}}>
            <PersonCard name="Barry Arsenio" city="Bandung" image={DummyProfile1} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingTop: 30,
              marginBottom: 20,
            }}>
            <Text>
              Anggota{' '}
              <Text style={{fontWeight: 'bold', color: '#5352ED'}}>(Full)</Text>
            </Text>
            <Text style={{fontWeight: '400', color: 'red'}}>Hapus</Text>
          </View>
          <View>
            <PersonCard name="Cavan Deon" city="Jakarta" onBack image={DummyProfile2} />
            <PersonCard name="Tania Farid" city="Jakarta" onBack image={DummyProfile3}/>
            <PersonCard name="Farel Harun" city="Jogjakarta" onBack image={DummyProfile4}/>
            <PersonCard name="Irfan Jaya" city="Bandung" onBack image={DummyProfile5}/>
          </View>
        </View>
        <View>
          <ButtonSecondary label="Batalkan pendakian"/>
          <Gap height={10} />
          <ButtonSecondary primary="secondary" label="Pesan sekarang" />
        </View>
        <View style={{paddingTop: 10, marginBottom: 30}}>
          <Text style={{color: '#54CD61', fontSize: 14}}>Tim kamu lengkap, <Text style={{fontWeight: 'bold'}}>tunggu apa lagi?</Text></Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default KelolaTim;

const styles = StyleSheet.create({
  page: {
    paddingTop: 30,
    paddingHorizontal: 24,
    backgroundColor: '#F8F8F8',
    flex: 1,
  },
});
