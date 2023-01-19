import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Federated } from '@callstack/repack/client';

const AptMap = React.lazy(() => Federated.importModule('app1', './AptMap'));
const AptDetail = React.lazy(() =>
  Federated.importModule('app1', './AptDetail')
);
const OneRoomMap = React.lazy(() =>
  Federated.importModule('app2', './OneRoomMap')
);
const OneRoomDetail = React.lazy(() =>
  Federated.importModule('app2', './OneRoomDetail')
);

function HomeScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="아파트 지도 이동"
        onPress={() => navigation.navigate('AptMap')}
      />
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
          name="AptMap"
          component={(props: any) => (
            <React.Suspense fallback={<Text>Loading AptMap...</Text>}>
              <AptMap {...props} />
            </React.Suspense>
          )}
        />
        <Stack.Screen
          name="AptDetail"
          component={(props: any) => (
            <React.Suspense fallback={<Text>Loading AptDetail...</Text>}>
              <AptDetail {...props} />
            </React.Suspense>
          )}
        />
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
