import * as React from 'react';
import { Text as RNText } from 'react-native';

export default function Text({ children }: { children: string }) {
  return (
    <RNText
      style={{
        color: 'blue',
        fontWeight: 'bold',
        backgroundColor: 'skyblue',
        padding: 10,
        margin: 8,
      }}
    >
      {children}
    </RNText>
  );
}
