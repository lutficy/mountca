import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import {ILLogo, ILSplashScreen} from '../../assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignUp');
    }, 3000);
  }, []);
  return (
    <View>
      <ImageBackground
        source={ILSplashScreen}
        style={{
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: 150,
            height: 150,
            borderRadius: 150 / 2,
            backgroundColor: '#FFC33A',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ILLogo width={120} height={120} />
        </View>
        <Text style={{fontSize: 40, color: 'white', fontWeight: 'bold'}}>
          Mountca'
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: 'white',
            maxWidth: 200,
            textAlign: 'center',
          }}>
          Grouping & Hiking Mountain App
        </Text>
      </ImageBackground>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
