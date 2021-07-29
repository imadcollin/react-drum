import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Header from './src/componants/Headers/Header';
import AppStyles from './AppStyle';
const App = () => {
  return (
    <SafeAreaView style={AppStyles.container}>
      <Text>App Container</Text>
      <View style={AppStyles.view}>
        <Header></Header>
        <Text>App View</Text>
      </View>
    </SafeAreaView>
  );
};
export default App;
