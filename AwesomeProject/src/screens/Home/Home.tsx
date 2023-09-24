import React from 'react';
import {Text, View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Navigate Home"
        onPress={() =>
          navigation.navigate({
            name: 'Home',
            params: {},
            merge: true,
          })
        }
      />
      <Button title="Push Home" onPress={() => navigation.push('Home')} />
      <Button
        title="Navigate Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button title="Push Details" onPress={() => navigation.push('Details')} />
    </View>
  );
};

export default Home;
