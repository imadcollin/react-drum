import React from 'react';
import {SafeAreaView, Text, View, Alert} from 'react-native';
import Header from './src/componants/Headers/Header';
import AppStyles from './AppStyle';
import Layout from './src/componants/Layout/Layout';
import PressButton from './src/componants/Button/PressButton';
const App = () => {
  return (
    <SafeAreaView style={AppStyles.container}>
      <Header></Header>
      <Layout></Layout>
      <PressButton title="btn 1"></PressButton>
      <PressButton title="btn 2"></PressButton>
      <Text>App Container</Text>
      <View style={AppStyles.view}>
        <Text>App View</Text>
      </View>
    </SafeAreaView>
  );
};
export default App;
