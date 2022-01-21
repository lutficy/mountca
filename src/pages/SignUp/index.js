import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {ILBackground, IconGoogle} from '../../assets';
import {Button, Gap, SignGoogle} from '../../components';
import Input from '../../components/molecules/Input';

const SignUp = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Image source={ILBackground} style={styles.image} />
      <View style={{paddingHorizontal: 24, paddingBottom: 24}}>
        <View style={{alignItems: 'center', paddingTop: 30}}>
          <Text style={{fontSize: 24, fontWeight: '700', color: 'black'}}>
            Get started for free
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '600',
              color: 'black',
              paddingTop: 10,
            }}>
            Have an account?{' '}
            <Text style={{fontSize: 16, fontWeight: '600', color: '#5352ED'}}>
              Log In
            </Text>{' '}
          </Text>
        </View>
        <View style={{paddingTop: 37}}>
          <SignGoogle />
        </View>
        <Text
          style={{
            textAlign: 'center',
            paddingVertical: 20,
            fontSize: 14,
            color: 'black',
          }}>
          or
        </Text>
        <View>
          <Input title="Email" type="Type your email" />
          <Gap height={20} />
          <Input
            secureTextEntry
            title="Create Password"
            type="Type your password"
            onBack={() => {}}
          />
        </View>
        <View style={{paddingTop: 34}}>
          <Button
            label="Create Account"
            onPress={() => navigation.navigate('ChooseMount')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  image: {
    height: 210,
    width: '100%',
  },
});
