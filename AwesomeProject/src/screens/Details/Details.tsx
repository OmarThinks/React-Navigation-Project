import React from 'react';
import {Text, View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function Details() {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button
        title="Navigate Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button title="Push Home" onPress={() => navigation.push('Home')} />
      <Button
        title="Navigate Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button title="Push Details" onPress={() => navigation.push('Details')} />
    </View>
  );
}

export default Details;
