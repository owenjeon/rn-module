import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AptDetail() {
  return (
    <View style={style.container}>
      <Text>아파트 상세</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
