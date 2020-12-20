import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Home = ({navigation}) => {
return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>This is Login Window</Text>
      <Button onPress= {() => navigation.navigate("Details") } title = 'Go to Sign up' ></Button>
     
    </View>

)

}
export default Home