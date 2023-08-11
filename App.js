import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CustomCalendar from './src/calender';
function handleOnClose() {
  // 나가기 기능 구현
}

function handleOnReset() {
  // 초기화 기능 구현
}
export default function App() {
  return (
    <View style={styles.container}>
      <CustomCalendar onClose={handleOnClose} onReset={handleOnReset} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
