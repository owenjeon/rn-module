import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function OneRoomDetail() {
  return (
    <View style={style.container}>
      <Text>원룸 상세</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
