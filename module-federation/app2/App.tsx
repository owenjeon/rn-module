import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OneRoomMap from './src/screens/OneRoomMap';
import OneRoomDetail from './src/screens/OneRoomDetail';

function HomeScreen({ navigation }: any) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange',
      }}
    >
      <Text>원룸 단독 앱</Text>
      <Button
        title="원룸 지도 이동"
        onPress={() => navigation.navigate('OneRoomMap')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="OneRoomMap"
          component={(props: any) => (
            <React.Suspense fallback={<Text>Loading OneRoomMap...</Text>}>
              <OneRoomMap {...props} />
            </React.Suspense>
          )}
        />
        <Stack.Screen
          name="OneRoomDetail"
          component={(props: any) => (
            <React.Suspense fallback={<Text>Loading OneRoomDetail...</Text>}>
              <OneRoomDetail {...props} />
            </React.Suspense>
          )}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
