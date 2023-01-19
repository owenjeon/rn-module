import * as React from 'react';
import { Text as RNText, View } from 'react-native';

// eslint-disable-next-line import/no-unresolved
const Text = React.lazy(() => import('app1/Text'));

export default function Root() {
  return (
    <React.Suspense fallback={<RNText>Loading module1...</RNText>}>
      <View style={{ backgroundColor: 'red', padding: 10, margin: 8 }}>
        <RNText>App1 -&gt; Module 1</RNText>
        <Text>App1 -&gt; Module 1 -&gt; App1</Text>
      </View>
    </React.Suspense>
  );
}
