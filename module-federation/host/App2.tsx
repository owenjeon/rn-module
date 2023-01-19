// eslint-disable-next-line import/no-extraneous-dependencies
import { Federated } from '@callstack/repack/client';
import React from 'react';
import { Text, SafeAreaView } from 'react-native';

const App1 = React.lazy(() => Federated.importModule('app1', './App'));
const AptMap = React.lazy(() => Federated.importModule('app1', './AptMap'));
const App2 = React.lazy(() => Federated.importModule('app2', './App'));

export default function App() {
  return (
    <SafeAreaView>
      <Text>Host App222</Text>
      <React.Suspense fallback={<Text>Loading app1...</Text>}>
        <App1 />
      </React.Suspense>
      <React.Suspense fallback={<Text>Loading app2...</Text>}>
        <App2 />
      </React.Suspense>
      <Text>???</Text>
      <React.Suspense fallback={<Text>Loading AptMap...</Text>}>
        <AptMap />
      </React.Suspense>
    </SafeAreaView>
  );
}
