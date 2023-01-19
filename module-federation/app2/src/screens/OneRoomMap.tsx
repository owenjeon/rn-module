import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function OneRoomMap() {
  const navigation = useNavigation<any>();
  return (
    <View style={style.container}>
      <Text>원룸 지도</Text>
      <Button
        title="원룸 상세로 이동"
        onPress={() => navigation.navigate('OneRoomDetail')}
      />
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
