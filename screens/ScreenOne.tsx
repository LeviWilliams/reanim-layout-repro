import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Animated, {FadeInUp} from 'react-native-reanimated';

const ScreenOne = () => {
  const navigation = useNavigation();

  useEffect(() => {
    return () => {
      console.warn('ScreenOne unmounted');
    };
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <Animated.View style={styles.entering} entering={FadeInUp} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ScreenTwo')}>
        <Text style={styles.buttonText}>Navigate</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  entering: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    marginTop: 30,
    alignSelf: 'center',
  },
  button: {
    marginTop: 30,
    width: 100,
    height: 50,
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'green',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});
export default ScreenOne;
