import React from 'react';
import {Text, View} from 'react-native';
import LayoutStyle from './LayoutStyle';
const Layout = (props) => {
  return (
    <View style={LayoutStyle.container}>
      <Text style={LayoutStyle.text}>Layout Comppnant</Text>
       {props.el}
    </View>
  );
};

export default Layout;
