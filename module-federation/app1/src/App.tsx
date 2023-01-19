import * as React from 'react';
import { Text, View } from 'react-native';

// eslint-disable-next-line import/no-unresolved
import Module1 from 'module1/Root';
import { foo } from './foo';

export default function App() {
  const [fooText, setFooText] = React.useState<string>('');

  React.useEffect(() => {
    (async () => {
      try {
        const fooText = await foo();
        setFooText(fooText);
      } catch {
        setFooText('Failed to get foo text');
      }
    })();
  }, []);

  return (
    <>
      <View style={{ backgroundColor: 'skyblue', padding: 10, margin: 8 }}>
        <Text>App 1</Text>
        <React.Suspense fallback={<Text>Loading module1...</Text>}>
          <Module1 />
        </React.Suspense>
        <Text>{fooText}</Text>
      </View>
    </>
  );
}
