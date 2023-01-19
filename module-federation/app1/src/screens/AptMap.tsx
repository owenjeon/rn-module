import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function AptMap() {
  const navigation = useNavigation<any>();
  return (
    <View style={style.container}>
      <Text>아파트 지도</Text>
      <Button
        title="아파트 상세로 이동"
        onPress={() => navigation.navigate('AptDetail')}
      />
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
